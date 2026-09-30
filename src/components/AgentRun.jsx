import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { agentPipeline } from '../data'

const bar = (p) => '█'.repeat(Math.floor(p / 10)) + '░'.repeat(10 - Math.floor(p / 10))

// Animated ASCII progress for the simulated CrewAI pipeline
export default function AgentRun() {
  const { t } = useTranslation()
  const [progress, setProgress] = useState(() => agentPipeline.map(() => 0))
  const done = progress.every((p) => p >= 100)

  useEffect(() => {
    if (done) return
    // Agents start in a staggered sequence, like a hierarchical crew
    const id = setInterval(() => {
      setProgress((prev) => prev.map((p, i, arr) => (i === 0 || arr[i - 1] >= 30 ? Math.min(100, p + 5 + i) : p)))
    }, 90)
    return () => clearInterval(id)
  }, [done])

  return (
    <div className="mt-1" dir="ltr">
      <p className="text-zinc-500">{t('terminal.agentStart')}</p>
      {agentPipeline.map((name, i) => (
        <p key={name} className="whitespace-pre">
          <span className="text-cyan">{name.padEnd(19)}</span>
          <span className={progress[i] >= 100 ? 'text-accent' : 'text-violet'}>{bar(progress[i])}</span>
          <span className="text-zinc-400"> {String(progress[i]).padStart(3)}%</span>
        </p>
      ))}
      <p className={done ? 'text-accent' : 'text-zinc-600'} dir="auto">{done ? t('terminal.agentDone') : '…'}</p>
    </div>
  )
}
