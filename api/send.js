// Vercel Serverless Function to securely send Telegram messages without exposing API keys to the client.
export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields: name, phone, or service' });
    }

    // Retrieve credentials from server environment variables (set these in Vercel/Netlify dashboard)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Server environment variables TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID are not set.');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const text = `Новая заявка с сайта!
👤 Имя: ${name}
📞 Телефон: ${phone}
🛠️ Услуга: ${service}
💬 Комментарий: ${message || '-'}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text();
      console.error('Telegram API error response:', errorText);
      return res.status(502).json({ error: 'Failed to send message to Telegram API' });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling send function:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
