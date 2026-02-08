import { useEffect, useRef, useState } from 'react'
import { 
  Wrench, 
  Droplet, 
  Flame, 
  Bath, 
  ShowerHead, 
  Grip,
  CheckCircle2
} from 'lucide-react'

const services = [
  {
    icon: Droplet,
    title: 'Устранение засоров',
    description: 'Прочистка канализации любой сложности. Удаление засоров в раковинах, ваннах, унитазах и трубах.',
    price: 'от 1 500 ₽',
    features: ['Механическая прочистка', 'Гидродинамическая очистка', 'Видеодиагностика'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Grip,
    title: 'Замена труб',
    description: 'Полная или частичная замена водопроводных и канализационных труб в квартире и частном доме.',
    price: 'от 3 000 ₽',
    features: ['Металлопластик', 'Полипропилен', 'Медные трубы'],
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Bath,
    title: 'Установка сантехники',
    description: 'Профессиональная установка ванн, раковин, унитазов, биде и другой сантехники.',
    price: 'от 2 500 ₽',
    features: ['Ванны и душевые', 'Раковины и мойки', 'Унитазы и биде'],
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: ShowerHead,
    title: 'Душевая кабина',
    description: 'Монтаж и подключение душевых кабин, поддонов, смесителей и душевых систем.',
    price: 'от 1 700 ₽',
    features: ['Сборка кабины', 'Подключение воды', 'Герметизация'],
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Flame,
    title: 'Водонагреватели',
    description: 'Установка и замена бойлеров, проточных и накопительных водонагревателей.',
    price: 'от 2 000 ₽',
    features: ['Накопительные', 'Проточные', 'Газовые колонки'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Wrench,
    title: 'Смесители',
    description: 'Замена и ремонт смесителей всех типов. Установка кранов, диверторов и аксессуаров.',
    price: 'от 800 ₽',
    features: ['Кухонные', 'Ванные', 'Душевые'],
    color: 'from-purple-500 to-pink-500'
  }
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 bg-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Полный спектр{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              сантехнических работ
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Предоставляем профессиональные услуги по ремонту и установке сантехники любой сложности. Прозрачные цены на все виды работ.
            Точную стоимость мастер определит после осмотра
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.has(index)
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`group relative flex flex-col p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price — прижато к низу карточки для выравнивания по сетке */}
                <div className="flex items-center pt-4 mt-auto border-t border-slate-700/50">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Не нашли нужную услугу? Свяжитесь с нами для консультации!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            <Wrench className="w-5 h-5" />
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  )
}
