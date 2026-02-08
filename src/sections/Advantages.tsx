import { useEffect, useRef, useState } from 'react'
import { 
  Clock, 
  Shield, 
  Award, 
  Wallet,
  ThumbsUp,
  Truck,
  BadgeCheck,
  Headphones
} from 'lucide-react'

const advantages = [
  {
    icon: Clock,
    title: 'Быстрый выезд',
    description: 'Приедем в течение 30 минут или в удобное для вас время. Работаем круглосуточно без выходных.',
    stat: '30 мин',
    statLabel: 'среднее время прибытия'
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все виды работ до 2 лет. Используем только качественные материалы.',
    stat: '2 года',
    statLabel: 'гарантия на работы'
  },
  {
    icon: Award,
    title: 'Опытные мастера',
    description: 'В штате только сертифицированные специалисты с опытом работы от 5 лет.',
    stat: '15+ лет',
    statLabel: 'средний стаж мастера'
  },
  {
    icon: Wallet,
    title: 'Честные цены',
    description: 'Фиксированная стоимость без скрытых платежей. Согласуем цену перед началом работ.',
    stat: '0 ₽',
    statLabel: 'выезд и диагностика'
  },
  {
    icon: ThumbsUp,
    title: 'Качественные материалы',
    description: 'Работаем только с проверенными поставщиками. Используем материалы премиум-класса.',
    stat: '100%',
    statLabel: 'оригинальные запчасти'
  },
  {
    icon: Truck,
    title: 'Бесплатный выезд',
    description: 'Бесплатный выезд мастера в пределах города. Диагностика бесплатно при выполнении работ.',
    stat: '0 ₽',
    statLabel: 'выезд в черте города'
  },
  {
    icon: BadgeCheck,
    title: 'Официальный договор',
    description: 'Заключаем официальный договор на все виды работ. Предоставляем акты выполненных работ.',
    stat: '100%',
    statLabel: 'юридическая защита'
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная поддержка клиентов. Отвечаем на все вопросы и консультируем.',
    stat: '24/7',
    statLabel: 'всегда на связи'
  }
]

export default function Advantages() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
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
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Преимущества работы{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              с нами
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Мы ценим ваше время и доверие, поэтому предлагаем только лучший сервис
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            const isVisible = visibleCards.has(index)
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el }}
                className={`group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-500 hover:bg-slate-800/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-slate-700/30">
                  <div className="text-2xl font-bold text-cyan-400">{advantage.stat}</div>
                  <div className="text-xs text-slate-500">{advantage.statLabel}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-slate-400">Выполненных заказов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-400">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9</div>
              <div className="text-slate-400">Средняя оценка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
