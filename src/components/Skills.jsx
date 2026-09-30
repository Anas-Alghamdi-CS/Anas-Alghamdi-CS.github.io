import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Atom, Blocks, Braces, Brain, ChartColumn, Code, Container, Cpu, Database, FileCode, Gauge,
  GitBranch, Globe, Layers, MessageSquare, Network, Rocket, ScanText, Server, Sparkles, Table,
  Terminal, Users, Workflow,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { skills } from '../data'
import Section from './Section'

const ICONS = {
  Atom, Blocks, Braces, Brain, ChartColumn, Code, Container, Cpu, Database, FileCode, Gauge,
  GitBranch, Globe, Layers, MessageSquare, Network, Rocket, ScanText, Server, Sparkles, Table,
  Terminal, Users, Workflow,
}

const FILTERS = ['all', 'ai', 'fullstack', 'tools']

function Badge({ name, icon, level, label }) {
  const Icon = ICONS[icon] ?? Code
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex cursor-default items-center gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5 transition-shadow hover:border-violet/70 hover:shadow-[0_0_24px_-4px_rgb(139_92_246/0.55)]"
      dir="ltr"
    >
      <Icon size={16} className="text-muted transition-colors group-hover:text-cyan" aria-hidden="true" />
      <span className="font-mono text-sm text-zinc-200">{name}</span>
      <span className="ms-1 flex gap-0.5" role="img" aria-label={`${label}: ${level}/5`} title={`${label}: ${level}/5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`h-3 w-1 rounded-full ${i <= level ? 'bg-accent' : 'bg-line'}`} />
        ))}
      </span>
    </motion.li>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')
  const visible = skills.filter((s) => active === 'all' || s.cat === active)

  return (
    <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div role="tablist" className="flex flex-wrap gap-2">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`relative cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
              active === key ? 'border-transparent text-white' : 'border-line text-muted hover:text-white'
            }`}
          >
            {active === key && (
              <motion.span layoutId="skill-filter" className="absolute inset-0 rounded-full border border-violet bg-violet/15" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{t(`skills.filters.${key}`)}</span>
          </button>
        ))}
      </div>
      <motion.ul layout role="tabpanel" className="mt-8 flex flex-wrap gap-3">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => <Badge key={s.name} {...s} label={t('skills.level')} />)}
        </AnimatePresence>
      </motion.ul>
    </Section>
  )
}
