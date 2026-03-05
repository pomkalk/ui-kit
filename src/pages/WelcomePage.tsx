export function WelcomePage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h1 className="mb-3 text-3xl font-semibold text-slate-900">
        Добро пожаловать в UI Kit Docs
      </h1>
      <p className="mb-2 text-sm leading-6 text-slate-600">
        В левом меню собраны все компоненты, сгруппированные по логике использования.
        Выберите компонент, чтобы открыть его отдельную страницу с описанием и примерами.
      </p>
      <p className="text-sm leading-6 text-slate-600">
        На каждой странице доступны:
        описание на русском языке, визуальные демо и код каждого примера.
      </p>
    </div>
  )
}

export default WelcomePage
