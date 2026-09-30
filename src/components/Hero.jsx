import { Download, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { cvUrl, links } from '../data'
import { GithubIcon, LinkedinIcon, XIcon } from './Icons'
import InteractiveTerminal from './InteractiveTerminal'

const socials = [
  { href: links.github, label: 'GitHub', Icon: GithubIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: links.x, label: 'X', Icon: XIcon },
]

const spring = { type: 'spring', stiffness: 90, damping: 16 }

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="top" className="hero-glow relative px-5 pb-12 pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t('hero.badge')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="gradient-text mt-6 text-5xl font-bold tracking-tight sm:text-6xl"
          >
            {t('hero.name')}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}>
            <p className="mt-4 text-lg font-medium text-zinc-300">{t('hero.role')}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{t('hero.summary')}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} aria-hidden="true" /> {t('hero.location')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href={cvUrl}
                download
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
              >
                <Download size={16} aria-hidden="true" /> {t('hero.cv')}
              </motion.a>
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-zinc-300 transition-colors hover:border-violet hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...spring, delay: 0.3 }}>
          <InteractiveTerminal />
          <p className="mt-3 text-center text-xs text-muted">{t('hero.terminalHint')}</p>
        </motion.div>
      </div>
    </section>
  )
}
