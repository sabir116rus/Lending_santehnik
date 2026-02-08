import { useState, useEffect, useRef } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Send,
  CheckCircle,
  MessageSquare
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+79600553409, +79370020520',
      subContent: 'Круглосуточно',
      href: 'tel:+79600553409'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'sanya.bazuka95@mail.ru',
      subContent: 'Для вопросов и предложений',
      href: 'mailto:sanya.bazuka95@mail.ru'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Казань ул. Дубравная дом 31',
      subContent: 'Выезд по всему городу',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: '24 часа / 7 дней',
      subContent: 'Без выходных и праздников',
      href: '#'
    }
  ]

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Свяжитесь{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              с нами
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам — мы готовы помочь вам прямо сейчас!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Оставить заявку
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Спасибо!</h4>
                  <p className="text-slate-400">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Ваше имя</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 999-99-99"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Услуга</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="clog">Устранение засора</option>
                      <option value="pipes">Замена труб</option>
                      <option value="install">Установка сантехники</option>
                      <option value="shower">Душевая кабина</option>
                      <option value="heater">Водонагреватель</option>
                      <option value="faucet">Смеситель</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Сообщение (необязательно)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Опишите проблему..."
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-5 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm mb-1">{info.title}</h4>
                    <p className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                      {info.content}
                    </p>
                    <p className="text-slate-500 text-sm">{info.subContent}</p>
                  </div>
                </a>
              )
            })}

            {/* Quick call CTA */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
              <h4 className="text-white font-semibold mb-2">Срочная помощь?</h4>
              <p className="text-slate-300 text-sm mb-4">
                Позвоните нам прямо сейчас — мастер выедет в течение 30 минут!
              </p>
              <a
                href="tel:+79600553409"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
