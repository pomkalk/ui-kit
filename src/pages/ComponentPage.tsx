import { useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'
import { componentDocsBySlug } from './componentDocs'
import type { ComponentPropDoc } from './types'

interface ExampleBlockProps {
  title: string
  description: string
  code: string
  preview: ReactNode
  showCodeLabel: string
  hideCodeLabel: string
}

function ExampleBlock({
  title,
  description,
  code,
  preview,
  showCodeLabel,
  hideCodeLabel,
}: ExampleBlockProps) {
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
          {showCode ? hideCodeLabel : showCodeLabel}
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

const fallbackPropDocs: ComponentPropDoc[] = [
  {
    name: 'className',
    type: 'string',
    description: 'Дополнительные CSS/Tailwind классы для кастомизации внешнего вида.',
    required: false,
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Вложенный контент компонента (если компонент поддерживает children).',
    required: false,
  },
  {
    name: '...rest',
    type: 'HTML attributes / component props',
    description: 'Нативные и дополнительные пропсы конкретного компонента.',
    required: false,
  },
]

interface PropsDocsBlockProps {
  propDocs?: ComponentPropDoc[]
  propsTitle: string
  propNameLabel: string
  propTypeLabel: string
  propDescriptionLabel: string
  propRequiredLabel: string
  propDefaultLabel: string
  yesLabel: string
  noLabel: string
}

function PropsDocsBlock({
  propDocs,
  propsTitle,
  propNameLabel,
  propTypeLabel,
  propDescriptionLabel,
  propRequiredLabel,
  propDefaultLabel,
  yesLabel,
  noLabel,
}: PropsDocsBlockProps) {
  const rows = propDocs && propDocs.length > 0 ? propDocs : fallbackPropDocs

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 text-base font-semibold text-slate-900">{propsTitle}</h3>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2 font-medium">{propNameLabel}</th>
              <th className="px-3 py-2 font-medium">{propTypeLabel}</th>
              <th className="px-3 py-2 font-medium">{propDescriptionLabel}</th>
              <th className="px-3 py-2 font-medium">{propRequiredLabel}</th>
              <th className="px-3 py-2 font-medium">{propDefaultLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((prop) => (
              <tr key={prop.name} className="border-t border-slate-200 align-top">
                <td className="px-3 py-2 font-mono text-xs text-slate-800">{prop.name}</td>
                <td className="px-3 py-2 font-mono text-xs text-slate-600">{prop.type}</td>
                <td className="px-3 py-2 text-slate-700">{prop.description}</td>
                <td className="px-3 py-2 text-slate-600">
                  {prop.required ? yesLabel : noLabel}
                </td>
                <td className="px-3 py-2 font-mono text-xs text-slate-600">
                  {prop.defaultValue ?? '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function ComponentPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !componentDocsBySlug[slug]) {
    return <Navigate replace to="/" />
  }

  const doc = componentDocsBySlug[slug]
  const nameKey = 'docs_' + slug + '_name'
  const descKey = 'docs_' + slug + '_description'

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          {t(nameKey, { defaultValue: doc.name })}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t(descKey, { defaultValue: doc.description })}
        </p>
      </div>

      {doc.examples.map((item, index) => {
        const exTitleKey = `docs_${slug}_ex_${index}_title`
        const exDescKey = `docs_${slug}_ex_${index}_description`
        return (
          <ExampleBlock
            key={item.title}
            code={item.code}
            description={t(exDescKey, { defaultValue: item.description })}
            hideCodeLabel={t('docs_hideCode')}
            preview={item.preview}
            showCodeLabel={t('docs_showCode')}
            title={t(exTitleKey, { defaultValue: item.title })}
          />
        )
      })}

      <PropsDocsBlock
        noLabel={t('docs_no')}
        propDefaultLabel={t('docs_propDefault')}
        propDescriptionLabel={t('docs_propDescription')}
        propDocs={doc.propDocs}
        propNameLabel={t('docs_propName')}
        propRequiredLabel={t('docs_propRequired')}
        propTypeLabel={t('docs_propType')}
        propsTitle={t('docs_propsTitle')}
        yesLabel={t('docs_yes')}
      />
    </div>
  )
}

export default ComponentPage
