import { NavLink, Outlet } from 'react-router-dom'
import { componentGroups } from './componentDocs'

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-[#eef1f8] p-6">
      <div className="mx-auto flex max-w-[1440px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <aside className="h-[calc(100vh-3rem)] w-[320px] overflow-y-auto border-r border-slate-200 bg-white p-4">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">UI Kit</h2>
            <p className="text-xs text-slate-500">Каталог компонентов</p>
          </div>

          <nav className="space-y-4">
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
              Приветствие
            </NavLink>

            {componentGroups.map((group) => (
              <section key={group.key} className="space-y-1.5">
                <h3 className="px-2 text-xs uppercase tracking-wide text-slate-400">
                  {group.title}
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
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </aside>

        <main className="h-[calc(100vh-3rem)] flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DocsLayout
