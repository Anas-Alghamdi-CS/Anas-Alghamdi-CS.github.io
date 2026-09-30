import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { skillGroups } from '../data'
import Section from './Section'

export default function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState('ai')

  return (
    <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div role="tablist" className="flex flex-wrap gap-2">
        {Object.keys(skillGroups).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
              active === key ? 'border-violet bg-violet/15 text-white' : 'border-line text-muted hover:text-white'
            }`}
          >
            {t(`skills.groups.${key}`)}
          </button>
        ))}
      </div>
      <ul role="tabpanel" className="mt-6 flex flex-wrap gap-3 rounded-2xl border border-line bg-surface p-6" dir="ltr">
        {skillGroups[active].map((s) => (
          <li key={s} className="rounded-lg border border-line bg-ink px-3 py-1.5 font-mono text-sm text-zinc-200 transition-colors hover:border-cyan hover:text-cyan">
            {s}
          </li>
        ))}
      </ul>
    </Section>
  )
}
