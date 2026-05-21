import { useState } from 'react'
import { ArrowUpRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Александр Петров',
    role: 'Владелец квартиры',
    avatar: 'АП',
    rating: 5,
    text: 'Вызывал мастера для устранения засора в кухонной раковине. Приехал через 20 минут, быстро нашёл причину и устранил проблему. Цена оказалась даже ниже, чем озвучивали по телефону.',
    service: 'Устранение засора',
    highlight: 'Аварийный выезд вечером',
  },
  {
    name: 'Елена Смирнова',
    role: 'Владелица квартиры',
    avatar: 'ЕС',
    rating: 5,
    text: 'Заменили старые трубы в ванной комнате. Работа выполнена качественно и аккуратно. Мастер был вежливым и профессиональным, объяснил каждое решение и дал гарантию на результат.',
    service: 'Замена труб',
    highlight: 'Аккуратный монтаж без хаоса',
  },
  {
    name: 'Михаил Иванов',
    role: 'Владелец частного дома',
    avatar: 'МИ',
    rating: 5,
    text: 'Устанавливали новую душевую кабину. Мастера приехали вовремя, всё сделали быстро и профессионально. Подключили коммуникации, проверили узлы и дали рекомендации по эксплуатации.',
    service: 'Душевая кабина',
    highlight: 'Полный монтаж под ключ',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeItem = testimonials[currentIndex]

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(7,10,15,0.95),_rgba(11,16,23,0.94))]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(94,170,208,0.14),_transparent_52%)]" />

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div className="max-w-xl">
            <span className="eyebrow">Отзывы клиентов</span>
            <h2 className="section-title mt-7">
              Отзывы,
              <span className="block text-[#d7bc8b]">которым</span>
              доверяют
            </h2>
            <p className="section-lead mt-6">
              Мы показываем не просто оценки, а реальные ситуации: срочный выезд, аккуратный ремонт, понятная стоимость и результат, который решает проблему без лишнего стресса для клиента.
            </p>

            <div className="mt-8 space-y-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-[#d7bc8b]/35 bg-[#d7bc8b]/8'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-white/38">
                        {item.service}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">{item.highlight}</div>
                    </div>
                    <ArrowUpRight
                      className={`h-5 w-5 ${index === currentIndex ? 'text-[#d7bc8b]' : 'text-white/34'}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <article className="chrome-card rounded-[34px] p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#d7bc8b,_#5eaad0)] text-xl font-bold text-[#081018]">
                  {activeItem.avatar}
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">{activeItem.name}</div>
                  <div className="mt-1 text-sm text-white/55">{activeItem.role}</div>
                </div>
              </div>

              <div className="glass-label">
                <Quote className="h-4 w-4 text-[#d7bc8b]" />
                <span>{activeItem.service}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-1">
              {[...Array(activeItem.rating)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-[#d7bc8b] text-[#d7bc8b]" />
              ))}
            </div>

            <blockquote className="display-title mt-6 text-2xl font-medium leading-[1.35] text-white sm:text-[2rem]">
              “{activeItem.text}”
            </blockquote>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.26em] text-white/38">скорость</div>
                <div className="mt-3 text-base font-semibold text-white">Приезд без ожидания</div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Мастер оперативно выезжает и сразу приступает к диагностике и устранению проблемы.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.26em] text-white/38">качество</div>
                <div className="mt-3 text-base font-semibold text-white">Аккуратная работа</div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  После ремонта остаётся порядок, а все соединения и узлы дополнительно проверяются.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.26em] text-white/38">доверие</div>
                <div className="mt-3 text-base font-semibold text-white">Цена без сюрпризов</div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Стоимость согласовывается заранее и не меняется после завершения работ.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
