import { useTranslation } from 'react-i18next'
import { links } from '../data'
import { GithubIcon, LinkedinIcon, XIcon } from './Icons'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <div className="text-center sm:text-start">
          <p>© {year} {t('hero.name')}. {t('footer.rights')}</p>
          <p className="text-xs">{t('footer.built')}</p>
        </div>
        <div className="flex gap-4">
          {[[links.github, 'GitHub', GithubIcon], [links.linkedin, 'LinkedIn', LinkedinIcon], [links.x, 'X', XIcon]].map(([href, label, Icon]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition-colors hover:text-white">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
