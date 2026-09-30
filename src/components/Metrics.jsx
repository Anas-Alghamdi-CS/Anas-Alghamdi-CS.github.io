import { useTranslation } from 'react-i18next'
import { metrics } from '../data'
import CountUp from './CountUp'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

export default function Metrics() {
  const { t } = useTranslation()
  return (
    <section aria-label="Impact metrics" className="mx-auto w-full max-w-6xl px-5 pb-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.08} className="h-full">
            <SpotlightCard className="h-full p-5">
              <p className="gradient-text text-4xl font-bold tracking-tight">
                <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{t(`metrics.${m.id}`)}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
