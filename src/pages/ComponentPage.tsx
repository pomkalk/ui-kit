import { useState, type ReactNode } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { componentDocsBySlug } from './componentDocs'

interface ExampleBlockProps {
  title: string
  description: string
  code: string
  preview: ReactNode
}

function ExampleBlock({ title, description, code, preview }: ExampleBlockProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <button
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
          onClick={() => setShowCode((value) => !value)}
          type="button"
        >
          {showCode ? 'Скрыть код' : 'Показать код'}
        </button>
      </div>

      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3">
        {preview}
      </div>

      {showCode ? (
        <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
          <code>{code}</code>
        </pre>
      ) : null}
    </section>
  )
}

export function ComponentPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !componentDocsBySlug[slug]) {
    return <Navigate replace to="/" />
  }

  const doc = componentDocsBySlug[slug]

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold text-slate-900">{doc.name}</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">{doc.description}</p>
      </div>

      {doc.examples.map((item) => (
        <ExampleBlock
          key={item.title}
          code={item.code}
          description={item.description}
          preview={item.preview}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default ComponentPage
