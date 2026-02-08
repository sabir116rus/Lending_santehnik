import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Устранение засоров', href: '#services' },
    { name: 'Замена труб', href: '#services' },
    { name: 'Установка сантехники', href: '#services' },
    { name: 'Душевые кабины', href: '#services' },
    { name: 'Водонагреватели', href: '#services' },
    { name: 'Ремонт смесителей', href: '#services' }
  ],
  company: [
    { name: 'О нас', href: '#' },
    { name: 'Наши мастера', href: '#' },
    { name: 'Отзывы', href: '#' },
    { name: 'Гарантии', href: '#' },
    { name: 'Вопрос-ответ', href: '#' }
  ],
  support: [
    { name: 'Контакты', href: '#contact' },
    { name: 'Цены', href: '#services' },
    { name: 'Акции', href: '#' },
    { name: 'Блог', href: '#' }
  ]
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Мастер сантехник 116" 
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Мастер сантехник</span>
                <span className="text-cyan-400 font-bold">116</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Профессиональные сантехнические услуги в Казани и ближайших районах к Казани. 
              Быстро, качественно, с гарантией до 2 лет.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+79600553409" 
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-cyan-500" />
                +79600553409
              </a>
              <a 
                href="mailto:sanya.bazuka95@mail.ru" 
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-500" />
                sanya.bazuka95@mail.ru
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-500" />
                г. Казань ул. Дубравная дом 31
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Мастер сантехник 116. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
