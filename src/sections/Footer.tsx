import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const serviceList = [
  'Устранение засоров',
  'Замена труб',
  'Монтаж сантехники',
  'Душевые кабины',
  'Водонагреватели',
  'Смесители и арматура',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06080d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,188,139,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(94,170,208,0.08),_transparent_28%)]" />

      <div className="section-shell relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1118] p-1">
                <img
                  src="/logo.webp"
                  alt="Мастер сантехник 116"
                  className="h-full w-full rounded-[18px] object-cover"
                />
              </div>
              <div>
                <div className="display-title text-2xl font-semibold text-white">
                  Мастер сантехник 116
                </div>

              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              Выездной сервис сантехнических работ в Казани: аварийные вызовы,
              монтаж, ремонт узлов и аккуратное сопровождение заказа от звонка до сдачи работ.
            </p>

            <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2">
              <a
                href="tel:+79600553409"
                className="glass-label justify-start rounded-[20px] px-4 py-4 hover:border-[#d7bc8b]/35"
              >
                <Phone className="h-4 w-4 text-[#d7bc8b]" />
                <span>+7 960 055-34-09</span>
              </a>
              <a
                href="https://t.me/Sanya_506"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-label justify-start rounded-[20px] px-4 py-4 hover:border-[#5eaad0]/35"
              >
                <MessageCircle className="h-4 w-4 text-[#5eaad0]" />
                <span>Telegram</span>
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOJ8DZtpYRBi9wH0FYZO02cDSrUD1QzZvkDP6z4AHe7kr1-qccE"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-label justify-start rounded-[20px] px-4 py-4 hover:border-[#d7bc8b]/35"
              >
                <MessageCircle className="h-4 w-4 text-[#d7bc8b]" />
                <span>MAKC</span>
              </a>
              <a
                href="mailto:sanya.bazuka95@mail.ru"
                className="glass-label justify-start rounded-[20px] px-4 py-4 hover:border-white/20"
              >
                <Mail className="h-4 w-4 text-white/70" />
                <span>sanya.bazuka95@mail.ru</span>
              </a>
              <div className="glass-label justify-start rounded-[20px] px-4 py-4">
                <MapPin className="h-4 w-4 text-white/70" />
                <span>Казань, ул. Дубравная, дом 31</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7bc8b]/76">услуги</div>
            <ul className="mt-6 space-y-3 text-sm text-white/64">
              {serviceList.map((item) => (
                <li key={item} className="border-b border-white/8 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7bc8b]/76">навигация</div>
            <div className="mt-6 space-y-3">
              <a
                href="#services"
                className="block rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/70 transition-colors duration-300 hover:border-white/20 hover:text-white"
              >
                Услуги и стоимость
              </a>
              <a
                href="#contact"
                className="block rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/70 transition-colors duration-300 hover:border-white/20 hover:text-white"
              >
                Контакты и быстрый вызов
              </a>
              <a
                href="tel:+79600553409"
                className="block rounded-[20px] border border-[#d7bc8b]/25 bg-[#d7bc8b]/8 px-4 py-4 text-sm font-semibold text-[#f0e1c1] transition-colors duration-300 hover:bg-[#d7bc8b]/12"
              >
                Срочно позвонить мастеру
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Мастер сантехник 116. Все права защищены.</p>

        </div>
      </div>
    </footer>
  )
}
