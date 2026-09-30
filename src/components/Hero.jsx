import { Download, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cvUrl, links } from '../data'
import { GithubIcon, LinkedinIcon, XIcon } from './Icons'

const socials = [
  { href: links.github, label: 'GitHub', Icon: GithubIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: links.x, label: 'X', Icon: XIcon },
]

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="top" className="hero-glow relative overflow-hidden px-5 pb-16 pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t('hero.badge')}
        </span>
        <h1 className="gradient-text mt-6 text-5xl font-bold tracking-tight sm:text-7xl">{t('hero.name')}</h1>
        <p className="mt-4 text-lg font-medium text-zinc-300">{t('hero.role')}</p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">{t('hero.summary')}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} aria-hidden="true" /> {t('hero.location')}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            <Download size={16} aria-hidden="true" /> {t('hero.cv')}
          </a>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-zinc-300 transition-colors hover:border-violet hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
