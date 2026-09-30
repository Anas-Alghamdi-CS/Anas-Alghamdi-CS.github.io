import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

// Animates a number from 0 to `value` once it scrolls into view
export default function CountUp({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { node.textContent = v.toFixed(decimals) + suffix },
    })
    return () => controls.stop()
  }, [inView, value, decimals, suffix])

  return <span ref={ref} dir="ltr">{(0).toFixed(decimals) + suffix}</span>
}
