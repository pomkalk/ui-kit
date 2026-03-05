import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as UI from '../components'
import { componentGroups } from './componentDocs'

export function DocsLayout() {
  const { t, i18n } = useTranslation()
  const languageOptions = [
    { label: t('layout_langRu'), value: 'ru' },
    { label: t('layout_langEn'), value: 'en' },
  ]

  return (
    <div className="min-h-screen bg-[#eef1f8]">
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <aside className="h-full w-[320px] overflow-y-auto border-r border-slate-200 bg-white p-4">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">{t('layout_appName')}</h2>
            <p className="text-xs text-slate-500">{t('layout_catalog')}</p>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              {t('layout_language')}
            </label>
            <UI.Select
              options={languageOptions}
              value={i18n.language}
              onValueChange={(value) => i18n.changeLanguage(value)}
            />
          </div>

          <nav className="space-y-3">
            <div className="space-y-1">
              <NavLink
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-blue-50 font-medium text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
                end
                to="/"
              >
                {t('layout_navWelcome')}
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-blue-50 font-medium text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
                to="/demo"
              >
                {t('layout_navDemo')}
              </NavLink>
            </div>

            {componentGroups.map((group) => (
              <section key={group.key} className="space-y-1.5">
                <h3 className="px-2 text-xs uppercase tracking-wide text-slate-400">
                  {t('docs_group_' + group.key, { defaultValue: group.title })}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.slug}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm transition ${
                          isActive
                            ? 'bg-blue-50 font-medium text-blue-700'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`
                      }
                      to={`/components/${item.slug}`}
                    >
                      {t('docs_' + item.slug + '_name', { defaultValue: item.name })}
                    </NavLink>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </aside>

        <main className="h-full flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DocsLayout
