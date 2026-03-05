import { useTranslation } from 'react-i18next'

export function WelcomePage() {
  const { t } = useTranslation()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h1 className="mb-3 text-3xl font-semibold text-slate-900">
        {t('welcome_title')}
      </h1>
      <p className="mb-2 text-sm leading-6 text-slate-600">
        {t('welcome_intro')}
      </p>
      <p className="text-sm leading-6 text-slate-600">
        {t('welcome_features')}
      </p>
    </div>
  )
}

export default WelcomePage
