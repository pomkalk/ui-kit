import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">
          UI Kit Starter
        </h1>
        <nav className="mb-6 flex gap-3">
          <Link
            to="/"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            to="/settings"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            Settings
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <p className="text-sm text-slate-600">
                React Router подключен. Tailwind настроен и готов к использованию.
              </p>
            }
          />
          <Route
            path="/settings"
            element={
              <p className="text-sm text-slate-600">
                Страница настроек. Здесь можно собирать экран по `guideline.md`.
              </p>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
