import { useState } from 'react'
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Loader2,
  AlertCircle,
} from 'lucide-react'

const contactLines = [
  {
    icon: Phone,
    title: 'Основной номер',
    content: '+7 960 055-34-09',
    hint: 'Круглосуточно для срочного вызова',
    href: 'tel:+79600553409',
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    content: '@Sanya_506',
    hint: 'Если удобнее написать, чем звонить',
    href: 'https://t.me/Sanya_506',
  },
  {
    icon: MessageCircle,
    title: 'MAKC',
    content: 'Связь через MAKC',
    hint: 'Альтернативный способ связи',
    href: 'https://max.ru/u/f9LHodD0cOJ8DZtpYRBi9wH0FYZO02cDSrUD1QzZvkDP6z4AHe7kr1-qccE',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sanya.bazuka95@mail.ru',
    hint: 'Для вопросов и согласований',
    href: 'mailto:sanya.bazuka95@mail.ru',
  },
  {
    icon: MapPin,
    title: 'Локация',
    content: 'г. Казань, ул. Дубравная, дом 31',
    hint: 'Выезд по городу и ближайшим районам',
    href: '#contact',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 1. Попытка отправить через безопасный серверный эндпоинт
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        // 2. Фолбэк для локальной разработки: если серверный эндпоинт недоступен (например, при npm run dev без vercel dev)
        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

        if (import.meta.env.DEV && botToken && chatId) {
          const text = `[DEV FALLBACK] Новая заявка с сайта!
Имя: ${formData.name}
Телефон: ${formData.phone}
Услуга: ${formData.service}
Комментарий: ${formData.message || '-'}`

          const devRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text,
            }),
          })

          if (!devRes.ok) throw new Error('Telegram API error')
          
          setSubmitStatus('success')
          setTimeout(() => {
            setSubmitStatus('idle')
            setFormData({ name: '', phone: '', service: '', message: '' })
          }, 3000)
          return
        }

        // Если не в режиме разработки или нет ключей, выбрасываем ошибку
        throw new Error('API request failed')
      }

      setSubmitStatus('success')
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({ name: '', phone: '', service: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(8,11,17,0.95),_rgba(8,11,17,1))]" />
      <div className="absolute left-1/4 top-0 -z-10 h-64 w-64 rounded-full bg-[#d7bc8b]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-[#5eaad0]/12 blur-3xl" />

      <div className="section-shell">
        <div className="chrome-card overflow-hidden rounded-[36px]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative border-b border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,188,139,0.1),_transparent_34%)]" />
              <div className="relative">
                <span className="eyebrow">Контакты</span>
                <h2 className="section-title mt-7">
                  Лучше всего
                  <span className="block text-[#d7bc8b]">решает звонок</span>
                </h2>
                <p className="section-lead mt-6 max-w-2xl">
                  Для аварийной сантехники самый быстрый путь один: позвонить мастеру. Так мы
                  сразу понимаем срочность, задаем нужные вопросы и предупреждаем о подготовке к
                  выезду. Telegram и форма остаются как запасные сценарии.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+79600553409"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d7bc8b]/35 bg-[#d7bc8b] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#091018] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-5 w-5" />
                    Позвонить сейчас
                  </a>
                  <a
                    href="https://t.me/Sanya_506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/82 transition-colors duration-300 hover:border-[#5eaad0]/35 hover:bg-[#5eaad0]/10"
                  >
                    <MessageCircle className="h-5 w-5 text-[#5eaad0]" />
                    Написать в Telegram
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOJ8DZtpYRBi9wH0FYZO02cDSrUD1QzZvkDP6z4AHe7kr1-qccE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/82 transition-colors duration-300 hover:border-[#d7bc8b]/35 hover:bg-[#d7bc8b]/10"
                  >
                    <MessageCircle className="h-5 w-5 text-[#d7bc8b]" />
                    Написать в MAKC
                  </a>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactLines.map((line) => {
                    const Icon = line.icon

                    return (
                      <a
                        key={line.title}
                        href={line.href}
                        target={line.href.startsWith('https') ? '_blank' : undefined}
                        rel={line.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/20"
                      >
                        <Icon className="h-6 w-6 text-[#d7bc8b]" />
                        <div className="mt-4 text-xs uppercase tracking-[0.26em] text-white/38">
                          {line.title}
                        </div>
                        <div className="mt-2 text-lg font-semibold text-white">{line.content}</div>
                        <div className="mt-2 text-sm leading-6 text-white/60">{line.hint}</div>
                      </a>
                    )
                  })}
                </div>


              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] px-6 py-8 sm:px-8 sm:py-10">

              <h3 className="mt-4 text-3xl font-semibold text-white">Оставить заявку</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Заполните форму ниже, и мастер свяжется с вами для обсуждения деталей и согласования времени выезда.
              </p>

              {submitStatus === 'success' ? (
                <div className="mt-8 rounded-[28px] border border-emerald-400/20 bg-emerald-500/10 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckCircle2 className="h-8 w-8 text-emerald-300" />
                  </div>
                  <h4 className="mt-5 text-2xl font-semibold text-white">Заявка успешно отправлена!</h4>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    Спасибо за обращение. Мы свяжемся с вами в ближайшее время по указанному номеру телефона.
                  </p>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="mt-8 rounded-[28px] border border-red-400/20 bg-red-500/10 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
                    <AlertCircle className="h-8 w-8 text-red-300" />
                  </div>
                  <h4 className="mt-5 text-2xl font-semibold text-white">Ошибка отправки</h4>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    К сожалению, произошла ошибка. Пожалуйста, позвоните нам или напишите в Telegram.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 text-sm font-medium text-white underline decoration-white/30 hover:decoration-white"
                  >
                    Попробовать снова
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Ваше имя</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full rounded-[20px] border border-white/10 bg-[#0a0f16] px-4 py-3.5 text-white placeholder:text-white/28 focus:border-[#d7bc8b]/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 999-99-99"
                      className="w-full rounded-[20px] border border-white/10 bg-[#0a0f16] px-4 py-3.5 text-white placeholder:text-white/28 focus:border-[#d7bc8b]/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Направление работ</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full cursor-pointer rounded-[20px] border border-white/10 bg-[#0a0f16] px-4 py-3.5 text-white focus:border-[#d7bc8b]/45 focus:outline-none"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="clog">Аварийный засор</option>
                      <option value="pipes">Замена труб</option>
                      <option value="install">Монтаж сантехники</option>
                      <option value="shower">Душевая кабина</option>
                      <option value="heater">Водонагреватель</option>
                      <option value="faucet">Смеситель и арматура</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Комментарий</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Коротко опишите ситуацию"
                      className="w-full resize-none rounded-[20px] border border-white/10 bg-[#0a0f16] px-4 py-3.5 text-white placeholder:text-white/28 focus:border-[#d7bc8b]/45 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-[#d7bc8b] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#091018] transition-all duration-300 hover:bg-[#c2a674] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Отправить заявку
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-white/35 leading-normal">
                    Нажимая «Отправить заявку», вы соглашаетесь с обработкой персональных данных в соответствии с ФЗ РФ №152-ФЗ.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
