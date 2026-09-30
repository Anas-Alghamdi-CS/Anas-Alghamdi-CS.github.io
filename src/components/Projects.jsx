import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import { GithubIcon } from './Icons'
import Reveal from './Reveal'
import Section from './Section'
import SpotlightCard from './SpotlightCard'

const TABS = ['overview', 'architecture', 'stack']

function ProjectCard({ id, stack, url, delay }) {
  const { t } = useTranslation()
  const [tab, setTab] = useState('overview')
  const arch = t(`projects.arch.${id}`, { returnObjects: true })

  return (
    <Reveal delay={delay} className="h-full">
      <SpotlightCard as="article" className="flex h-full flex-col">
        {/* macOS window chrome */}
        <div className="flex items-center gap-1.5 border-b border-line bg-ink/60 px-4 py-2.5" dir="ltr">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto pe-8 font-mono text-[11px] text-muted">{id}.md</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-semibold text-white">{t(`projects.items.${id}.title`)}</h3>
          <div role="tablist" className="mt-4 flex gap-1 rounded-lg border border-line bg-ink p-1">
            {TABS.map((k) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={`relative flex-1 cursor-pointer rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${tab === k ? 'text-white' : 'text-muted hover:text-zinc-200'}`}
              >
                {tab === k && (
                  <motion.span layoutId={`tab-${id}`} className="absolute inset-0 rounded-md bg-violet/25" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{t(`projects.tabs.${k}`)}</span>
              </button>
            ))}
          </div>
          <div role="tabpanel" className="mt-4 min-h-40 flex-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {tab === 'overview' && <p className="text-sm leading-relaxed text-muted">{t(`projects.items.${id}.desc`)}</p>}
                {tab === 'architecture' && (
                  <ol className="space-y-2.5 text-sm text-zinc-300">
                    {arch.map((a, i) => (
                      <li key={a} className="flex gap-3">
                        <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, '0')}</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {tab === 'stack' && (
                  <ul className="flex flex-wrap gap-2" dir="ltr">
                    {stack.map((s) => (
                      <motion.li
                        key={s}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="cursor-default rounded-md border border-line px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
                      >
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:border-violet hover:shadow-lg hover:shadow-violet/20"
          >
            <GithubIcon className="h-4 w-4" />
            {t('projects.github')}
            <ArrowUpRight size={14} className="rtl:-scale-x-100" aria-hidden="true" />
          </motion.a>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.id} {...p} delay={i * 0.1} />)}
      </div>
    </Section>
  )
}
