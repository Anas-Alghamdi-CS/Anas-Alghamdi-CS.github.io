import { Briefcase, ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Section from './Section'
import SpotlightCard from './SpotlightCard'

function Card({ keyName, Icon, className = '', delay }) {
  const { t } = useTranslation()
  const points = t(`experience.${keyName}.points`, { returnObjects: true })
  return (
    <Reveal delay={delay} className={className}>
      <SpotlightCard as="article" className="h-full p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line text-violet">
            <Icon size={18} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold text-white">{t(`experience.${keyName}.role`)}</h3>
            <p className="text-sm text-muted">
              {t(`experience.${keyName}.company`)} · <span className="font-mono text-xs">{t(`experience.${keyName}.date`)}</span>
            </p>
          </div>
        </div>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
          {points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </Reveal>
  )
}

export default function Experience() {
  const { t } = useTranslation()
  return (
    <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      <div className="grid gap-4 md:grid-cols-5">
        <Card keyName="wadi" Icon={Briefcase} className="md:col-span-3" />
        <Card keyName="hajj" Icon={ShieldAlert} className="md:col-span-2" delay={0.12} />
      </div>
    </Section>
  )
}
