import Reveal from './Reveal'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
