import { Award, GraduationCap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Section from './Section'
import SpotlightCard from './SpotlightCard'

export default function Education() {
  const { t } = useTranslation()
  const certs = t('education.certs', { returnObjects: true })
  return (
    <Section id="education" title={t('education.title')}>
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <SpotlightCard as="article" className="h-full p-6">
            <GraduationCap className="text-violet" size={22} aria-hidden="true" />
            <h3 className="mt-4 font-semibold text-white">{t('education.degree')}</h3>
            <p className="text-sm text-muted">{t('education.university')}</p>
            <p className="mt-4 text-sm text-zinc-300">{t('education.gpa')}</p>
            <p className="font-mono text-xs text-muted">{t('education.date')}</p>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <SpotlightCard as="article" className="h-full p-6">
            <Award className="text-cyan" size={22} aria-hidden="true" />
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {certs.map((c) => (
                <li key={c} className="border-b border-line pb-3 last:border-0 last:pb-0">{c}</li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}
