// Minimal syntax highlighter for pretty-printed JSON
const TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|([[\]{},])/g

export default function JsonView({ data }) {
  const text = JSON.stringify(data, null, 2)
  const parts = []
  let last = 0
  let m
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1]) {
      parts.push(<span key={m.index} className={m[2] ? 'text-violet' : 'text-accent'}>{m[1]}</span>)
      if (m[2]) parts.push(m[2])
    } else {
      parts.push(<span key={m.index} className="text-zinc-500">{m[3]}</span>)
    }
    last = TOKEN.lastIndex
  }
  parts.push(text.slice(last))
  return <pre dir="ltr" className="whitespace-pre-wrap">{parts}</pre>
}
