import {
  ArrowRight,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const serviceMetrics = [
  { value: '24/7', label: 'аварийный выезд без выходных' },
  { value: '30 мин', label: 'среднее прибытие по Казани' },
  { value: '2 года', label: 'гарантия на выполненные работы' },
]

const trustSignals = [
  'Прозрачная оценка до начала работ',
  'Сантехника, засоры, трубы и монтаж под ключ',
  'Согласование стоимости до старта работ',
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-0 pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(214,188,139,0.22),_transparent_28%),radial-gradient(circle_at_82%_14%,_rgba(94,170,208,0.18),_transparent_22%),linear-gradient(180deg,_rgba(9,12,18,0.96),_rgba(7,10,15,0.92))]" />
      <div className="absolute inset-0 -z-10 opacity-60">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
        >
          <source src="/plumbing-work.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(7,10,15,0.94)_0%,_rgba(7,10,15,0.78)_46%,_rgba(7,10,15,0.30)_100%)]" />
      </div>
      <div className="absolute left-6 top-28 hidden h-40 w-40 rounded-full border border-[#d7bc8b]/20 bg-[#d7bc8b]/10 blur-3xl lg:block" />
      <div className="absolute bottom-10 right-6 hidden h-56 w-56 rounded-full border border-[#5eaad0]/20 bg-[#5eaad0]/10 blur-3xl lg:block" />

      <div className="section-shell">
        <header className="chrome-card flex flex-col gap-6 rounded-[28px] px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-white/10 bg-[#0f141d] p-1">
              <img
                src="/logo.webp"
                alt="Мастер сантехник 116"
                className="h-full w-full rounded-[18px] object-cover"
              />
            </div>
            <div>
              <div className="display-title text-2xl font-semibold tracking-[0.08em] text-white">
                Мастер сантехник 116
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            <a
              href="tel:+79600553409"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7bc8b]/35 bg-[#d7bc8b] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0a0d12] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Срочный звонок
            </a>
            <a
              href="https://t.me/Sanya_506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-[#5eaad0]/40 hover:bg-[#5eaad0]/10"
            >
              <MessageCircle className="h-4 w-4 text-[#5eaad0]" />
              Telegram
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOJ8DZtpYRBi9wH0FYZO02cDSrUD1QzZvkDP6z4AHe7kr1-qccE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-[#d7bc8b]/40 hover:bg-[#d7bc8b]/10"
            >
              <MessageCircle className="h-4 w-4 text-[#d7bc8b]" />
              MAKC
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/72 transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              Контакты
            </a>
          </div>
        </header>

        <div className="grid gap-10 pb-8 pt-10 lg:items-start lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14 lg:pb-12 lg:pt-16">
          <div
            className="translate-y-0 opacity-100 transition-all duration-1000"
          >
            <span className="eyebrow">аварийный и плановый выезд</span>

            <div className="mt-8 max-w-4xl">
              <h1 className="display-title text-[3.3rem] font-semibold leading-[0.92] text-white sm:text-[4rem] md:text-[4.5rem] lg:text-[4.2rem] xl:text-[6.2rem]">
                Сервис
                <span className="block text-white">сантехнического выезда</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Устраняем аварии, монтируем сантехнику и приводим инженерные узлы в порядок
                без хаоса, затяжек и спорной сметы. Выезд по Казани круглосуточно, с
                согласованием стоимости до старта работ.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+79600553409"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d7bc8b]/35 bg-[#d7bc8b] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#090c10] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Позвонить мастеру
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors duration-300 hover:border-[#5eaad0]/30 hover:bg-[#5eaad0]/10"
              >
                Смотреть направления работ
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {serviceMetrics.map((metric) => (
                <div key={metric.label} className="metal-panel rounded-[24px] px-5 py-5">
                  <div className="display-title text-3xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/62">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="glass-label justify-center sm:justify-start">
                  <ShieldCheck className="h-4 w-4 text-[#d7bc8b]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative translate-y-0 opacity-100 transition-all delay-150 duration-1000 lg:-translate-y-8 lg:ml-auto lg:max-w-[440px]"
          >
            <div className="chrome-card tech-grid overflow-hidden rounded-[34px] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>

                  <div className="display-title mt-2 text-3xl font-semibold text-white">
                    Экстренный выезд без лишних этапов
                  </div>
                </div>
                <Sparkles className="h-7 w-7 text-[#5eaad0]" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[26px] border border-white/8 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                    приоритетный контакт
                  </div>
                  <a
                    href="tel:+79600553409"
                    className="display-title mt-3 block text-[2rem] font-semibold leading-none text-white transition-colors hover:text-[#d7bc8b] sm:text-[2.6rem]"
                  >
                    +7 960 055-34-09
                  </a>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/62">
                    Звонок остается главным сценарием: так мастер быстрее оценит ситуацию и
                    скажет, как подготовиться к его приезду.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                    <Clock3 className="h-5 w-5 text-[#d7bc8b]" />
                    <div className="mt-4 text-sm uppercase tracking-[0.28em] text-white/42">
                      режим работы
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">Круглосуточно</div>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      Работаем ночью, утром, в выходные и в праздничные дни.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                    <ShieldCheck className="h-5 w-5 text-[#5eaad0]" />
                    <div className="mt-4 text-sm uppercase tracking-[0.28em] text-white/42">
                      сервисный стандарт
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">Договор и гарантия</div>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      Объем работ, цена и результат фиксируются до закрытия заказа.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
