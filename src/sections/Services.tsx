import { useEffect, useRef, useState } from 'react'
import {
  Bath,
  Droplet,
  Flame,
  Grip,
  ShowerHead,
  Wrench,
} from 'lucide-react'

const featuredServices = [
  {
    icon: Droplet,
    code: '01',
    title: 'Аварийные засоры и протечки',
    price: 'от 1 500 ₽',
    description:
      'Быстрая локализация и устранение засоров в кухне, ванной, санузле и стояках. Устранение срочных бытовых аварий и проблем с отводом воды.',
    highlights: ['Срочный выезд', 'Механическая и гидродинамическая прочистка', 'Работа с бытовыми и сложными засорами'],
  },
  {
    icon: Grip,
    code: '02',
    title: 'Трубы и инженерные линии',
    price: 'от 3 000 ₽',
    description:
      'Частичная и полная замена труб, врезки, восстановление узлов и подготовка коммуникаций для санузлов, кухни и частного дома.',
    highlights: ['Полипропилен, металлопластик, медь', 'Замена участков без лишнего шума', 'Согласование схемы до начала работ'],
  },
  {
    icon: Bath,
    code: '03',
    title: 'Монтаж сантехники под ключ',
    price: 'от 2 500 ₽',
    description:
      'Установка ванн, раковин, унитазов, инсталляций и сопутствующей арматуры с аккуратной посадкой, герметизацией и проверкой узлов.',
    highlights: ['Подключение и герметизация', 'Проверка на протечки', 'Финальная настройка и приемка'],
  },
]

const supportServices = [
  { icon: ShowerHead, name: 'Душевые кабины', price: 'от 1 700 ₽' },
  { icon: Flame, name: 'Водонагреватели', price: 'от 2 000 ₽' },
  { icon: Wrench, name: 'Смесители и арматура', price: 'от 800 ₽' },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.18 }
    )

    const current = sectionRef.current
    if (current) {
      observer.observe(current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(8,11,17,0.82),_rgba(11,15,22,0.96))]" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-[#d7bc8b]/8 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-[#5eaad0]/10 blur-3xl" />

      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-xl">
            <span className="eyebrow">направления работ</span>
            <h2 className="section-title mt-7">
              Инженерная витрина
            </h2>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.03] p-6">

              <p className="mt-4 text-sm leading-7 text-white/68">
                Цены указаны как стартовые ориентиры. Финальная стоимость подтверждается после
                осмотра, когда мастер видит доступ к узлу, материалы и объем работ.
              </p>
              <a
                href="tel:+79600553409"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-[#d7bc8b]"
              >
                Позвонить и уточнить стоимость
              </a>
            </div>
          </div>

          <div
            className={`grid gap-5 transition-all duration-1000 lg:grid-cols-3 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {featuredServices.map((service, index) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="chrome-card flex h-full flex-col rounded-[30px] p-6"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.04]">
                      <Icon className="h-7 w-7 text-[#d7bc8b]" />
                    </div>
                    <span className="display-title text-sm tracking-[0.32em] text-white/28">
                      {service.code}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                      старт работ
                    </div>
                    <div className="display-title mt-2 text-3xl font-semibold text-white">
                      {service.price}
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-grow text-sm leading-7 text-white/66">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-white/76">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5eaad0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-[34px] border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-3 sm:p-8">
          {supportServices.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.name}
                className="flex items-center gap-4 rounded-[24px] border border-white/8 bg-[#0a0f16] px-5 py-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/[0.04]">
                  <Icon className="h-6 w-6 text-[#5eaad0]" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/38">доп. работы</div>
                  <div className="mt-1 text-base font-semibold text-white">{service.name}</div>
                  <div className="mt-1 text-sm text-[#d7bc8b]">{service.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
