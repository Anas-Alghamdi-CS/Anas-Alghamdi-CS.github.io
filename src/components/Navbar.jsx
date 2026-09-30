import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const items = ['experience', 'projects', 'skills', 'education']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language.startsWith('ar') ? 'en' : 'ar')

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-line bg-surface/70 px-4 py-2 backdrop-blur-xl">
        <a href="#top" className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-xs font-bold text-ink" aria-label="Home">
          AG
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {items.map((k) => (
            <li key={k}>
              <a href={`#${k}`} className="transition-colors hover:text-white">{t(`nav.${k}`)}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggle}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-violet hover:text-white"
        >
          <Languages size={14} aria-hidden="true" />
          {t('nav.switch')}
        </button>
      </nav>
    </header>
  )
}
