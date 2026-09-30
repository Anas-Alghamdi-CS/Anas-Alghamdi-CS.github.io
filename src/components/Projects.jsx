import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import Section from './Section'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map(({ id, stack, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-violet/60"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-white">{t(`projects.items.${id}.title`)}</h3>
              <ArrowUpRight size={18} className="shrink-0 text-muted transition-colors group-hover:text-white rtl:-scale-x-100" aria-hidden="true" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(`projects.items.${id}.desc`)}</p>
            <ul className="mt-5 flex flex-wrap gap-2" dir="ltr">
              {stack.map((s) => (
                <li key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-zinc-300">{s}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  )
}
