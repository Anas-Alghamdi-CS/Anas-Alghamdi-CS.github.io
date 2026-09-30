export default function GridBackground() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="grid-orb bg-violet" style={{ top: '-10rem', insetInlineStart: '-8rem' }} aria-hidden="true" />
      <div className="grid-orb bg-cyan" style={{ top: '4rem', insetInlineEnd: '-10rem', animationDelay: '-6s' }} aria-hidden="true" />
    </>
  )
}
