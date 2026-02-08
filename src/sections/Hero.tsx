import { useEffect, useRef, useState } from 'react'
import { Phone, Clock, Shield, MessageCircle } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-slate-900/40" aria-hidden />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-slate-900/30">
          <div className="flex items-center gap-3">
            {/* Logo from image */}
            <img 
              src="/logo.png" 
              alt="Мастер сантехник 116" 
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Мастер сантехник</span>
              <span className="text-cyan-400 font-bold">116</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Контакты
            </a>
            <a
              href="https://t.me/Sanya_506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25"
              title="Написать в Telegram"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a 
              href="tel:+79600553409" 
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+79600553409</span>
            </a>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex items-center px-6 py-12">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300 text-base font-medium">Работаем 24/7 без выходных</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Профессиональная{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                    сантехника
                  </span>{' '}
                  на дому
                </h1>
                
                <p className="text-lg text-slate-300 max-w-xl">
                  Быстрый и качественный ремонт любой сложности. 
                  Устранение засоров, замена труб, установка сантехники. 
                  Гарантия на все работы до 2 лет.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-xs sm:text-sm text-slate-400">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">5000+</div>
                  <div className="text-xs sm:text-sm text-slate-400">клиентов</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">30 мин</div>
                  <div className="text-xs sm:text-sm text-slate-400">прибытие</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Вызвать мастера
                </a>
                <a 
                  href="#services"
                  className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all duration-300 backdrop-blur-sm"
                >
                  Услуги и цены
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Срочный выезд</span>
                </div>
              </div>
            </div>

            {/* Right side - Empty for 3D visualization */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="rgba(15, 23, 42, 0.8)"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
