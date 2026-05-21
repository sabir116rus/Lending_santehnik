import {
  BadgeCheck,
  Clock3,
  Headphones,
  Shield,
  Truck,
  Wallet,
} from 'lucide-react'

const standards = [
  {
    icon: Clock3,
    label: 'Скорость',
    title: 'Выезд в течение 30 минут',
    description:
      'Среднее прибытие по городу. Если ситуация не аварийная, согласуем удобное окно и приезжаем без срыва графика.',
    stat: '30 мин',
  },
  {
    icon: Shield,
    label: 'Гарантии',
    title: 'До 2 лет на выполненные работы',
    description:
      'Не просто обещание в разговоре: результат фиксируется, а узлы проверяются после завершения монтажа или ремонта.',
    stat: '2 года',
  },
  {
    icon: Wallet,
    label: 'Смета',
    title: 'Честная цена до старта работ',
    description:
      'Сначала диагностика и согласование. Потом работы. Без внезапных доплат за каждый следующий шаг.',
    stat: '0 ₽',
  },
]

const proofItems = [
  { icon: Truck, text: 'Выезд мастера по городу' },
  { icon: BadgeCheck, text: 'Официальный договор и акты работ' },
  { icon: Headphones, text: 'Поддержка и связь с клиентом 24/7' },
]

export default function Advantages() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(10,14,20,0.92),_rgba(9,13,18,0.98))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,_transparent,_rgba(215,188,139,0.48),_rgba(94,170,208,0.42),_transparent)]" />

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="section-title mt-7">
              Работаем честно.
              <span className="block text-[#5eaad0]">Приезжаем быстро.</span>
              Отвечаем за результат.
            </h2>
            <p className="section-lead mt-6 max-w-xl">
              Мы заранее объясняем стоимость, согласуем каждый этап и не навязываем лишние услуги. Мастер приезжает в оговорённое время, выполняет работу аккуратно и даёт гарантию на результат.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="metal-panel rounded-[26px] px-5 py-6">
                <div className="display-title text-4xl font-semibold text-white">5000+</div>
                <p className="mt-2 text-sm leading-6 text-white/60">выполненных заказов</p>
              </div>
              <div className="metal-panel rounded-[26px] px-5 py-6">
                <div className="display-title text-4xl font-semibold text-white">98%</div>
                <p className="mt-2 text-sm leading-6 text-white/60">клиентов довольны сервисом</p>
              </div>
              <div className="metal-panel rounded-[26px] px-5 py-6">
                <div className="display-title text-4xl font-semibold text-white">4.9</div>
                <p className="mt-2 text-sm leading-6 text-white/60">средняя оценка работы</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {standards.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="chrome-card rounded-[30px] px-6 py-6 sm:px-8 sm:py-7"
                >
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.04]">
                      <Icon className="h-7 w-7 text-[#d7bc8b]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                        {item.label}
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
                    </div>
                    <div className="display-title text-3xl font-semibold text-[#5eaad0] sm:text-4xl">
                      {item.stat}
                    </div>
                  </div>
                </article>
              )
            })}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {proofItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.text}
                      className="rounded-[24px] border border-white/8 bg-[#091019] px-5 py-5"
                    >
                      <Icon className="h-6 w-6 text-[#5eaad0]" />
                      <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
