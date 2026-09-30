import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { skillsJson } from '../data'
import AgentRun from './AgentRun'
import JsonView from './JsonView'

const CHIPS = ['help', 'cat about.txt', 'run agent.py', 'skills --json', 'clear']

let nextId = 0
const entry = (kind, extra = {}) => ({ id: nextId++, kind, ...extra })

export default function InteractiveTerminal() {
  const { t } = useTranslation()
  const [entries, setEntries] = useState(() => [entry('welcome')])
  const [value, setValue] = useState('')
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Scroll only the terminal body, never the page
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries])

  const run = (raw) => {
    const cmd = raw.trim().replace(/\s+/g, ' ')
    if (!cmd) return
    const key = cmd.toLowerCase()
    if (key === 'clear') return setEntries([])
    const out = {
      help: entry('help'),
      'cat about.txt': entry('about'),
      'run agent.py': entry('agent'),
      'python agent.py': entry('agent'),
      'skills --json': entry('json'),
    }[key] ?? entry('unknown', { cmd })
    setEntries((prev) => [...prev, entry('cmd', { text: cmd }), out])
  }

  const submit = (e) => {
    e.preventDefault()
    run(value)
    setValue('')
  }

  const render = (e) => {
    switch (e.kind) {
      case 'welcome': return <p className="text-zinc-400" dir="auto">{t('terminal.welcome')}</p>
      case 'cmd': return <p><span className="text-accent">❯</span> <span className="text-zinc-100">{e.text}</span></p>
      case 'help':
        return (
          <div className="space-y-0.5">
            {t('terminal.help', { returnObjects: true }).map(([c, d]) => (
              <p key={c} className="flex gap-3">
                <span className="w-28 shrink-0 text-cyan" dir="ltr">{c}</span>
                <span className="text-zinc-400" dir="auto">{d}</span>
              </p>
            ))}
          </div>
        )
      case 'about':
        return (
          <div className="text-zinc-300" dir="auto">
            {t('terminal.about', { returnObjects: true }).map((l, i) => (
              <p key={l} className={i === 0 ? 'font-semibold text-white' : ''}>{l}</p>
            ))}
          </div>
        )
      case 'agent': return <AgentRun />
      case 'json': return <JsonView data={skillsJson} />
      default: return <p className="text-red-400" dir="auto">{t('terminal.unknown', { cmd: e.cmd })}</p>
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0c0c0f] shadow-2xl shadow-violet/10" dir="ltr">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto pe-10 font-mono text-xs text-muted">anas@portfolio: ~</span>
      </div>
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="term-scroll h-80 cursor-text space-y-2 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
      >
        {entries.map((e) => <div key={e.id}>{render(e)}</div>)}
        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="text-accent">❯</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('terminal.placeholder')}
            aria-label="Terminal input"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            dir="ltr"
            className="min-w-0 flex-1 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600"
          />
        </form>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line bg-surface px-3 py-2.5">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className="cursor-pointer rounded-md border border-line px-2 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-cyan hover:text-cyan"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
