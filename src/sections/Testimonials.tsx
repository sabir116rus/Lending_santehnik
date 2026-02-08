import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Александр Петров',
    role: 'Владелец квартиры',
    avatar: 'АП',
    rating: 5,
    text: 'Вызывал мастера для устранения засора в кухонной раковине. Приехал через 20 минут, быстро нашёл причину и устранил проблему. Цена оказалась даже ниже, чем озвучивали по телефону. Рекомендую!',
    service: 'Устранение засора'
  },
  {
    name: 'Елена Смирнова',
    role: 'Домохозяйка',
    avatar: 'ЕС',
    rating: 5,
    text: 'Заменили старые трубы в ванной комнате. Работа выполнена качественно и аккуратно. Мастер был вежливым и профессиональным. Дали гарантию на 2 года. Очень довольна результатом!',
    service: 'Замена труб'
  },
  {
    name: 'Михаил Иванов',
    role: 'Владелец частного дома',
    avatar: 'МИ',
    rating: 5,
    text: 'Устанавливали новую душевую кабину. Мастера приехали вовремя, всё сделали быстро и качественно. Подключили все коммуникации, проверили работу. Спасибо за отличную работу!',
    service: 'Установка душевой кабины'
  },
  {
    name: 'Ольга Козлова',
    role: 'Менеджер',
    avatar: 'ОК',
    rating: 5,
    text: 'Срочно понадобилась помощь с протечкой в ванной. Позвонила в 11 вечера, мастер приехал через полчаса! Быстро нашёл причину и устранил течь. Цена адекватная, сервис отличный.',
    service: 'Устранение протечки'
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Инженер',
    avatar: 'ДС',
    rating: 5,
    text: 'Заказывал установку водонагревателя. Мастер приехал с нужными материалами, всё сделал быстро и профессионально. Дал рекомендации по эксплуатации. Работой доволен на 100%!',
    service: 'Установка водонагревателя'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-slate-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Что говорят{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              наши клиенты
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Мы гордимся доверием наших клиентов и их положительными отзывами
          </p>
        </div>

        {/* Testimonials slider */}
        <div 
          ref={sliderRef}
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main testimonial card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-slate-700 hover:bg-cyan-500 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-cyan-500 w-8' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-slate-700 hover:bg-cyan-500 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Side cards preview */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500/10 border-cyan-500/30'
                    : 'bg-slate-900/30 border-slate-700/30 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{testimonial.name}</div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm line-clamp-2">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
