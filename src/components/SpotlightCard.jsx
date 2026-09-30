import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

// Card whose background and border glow follow the mouse pointer
export default function SpotlightCard({ children, className = '', as = 'div', ...rest }) {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 300, damping: 40 })
  const sy = useSpring(y, { stiffness: 300, damping: 40 })
  const fill = useMotionTemplate`radial-gradient(340px circle at ${sx}px ${sy}px, rgb(139 92 246 / 0.16), transparent 70%)`
  const ring = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, rgb(34 211 238 / 0.85), rgb(139 92 246 / 0.4) 50%, transparent 75%)`
  const Tag = motion[as]

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }

  return (
    <Tag
      onMouseMove={onMove}
      className={`group relative isolate overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      {...rest}
    >
      <motion.div aria-hidden="true" style={{ background: fill }} className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <motion.div aria-hidden="true" style={{ background: ring }} className="spotlight-ring pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </Tag>
  )
}
