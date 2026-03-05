import { Navigate, Route, Routes } from 'react-router-dom'
import ComponentPage from './pages/ComponentPage'
import DocsLayout from './pages/DocsLayout'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />} path="/">
        <Route element={<WelcomePage />} index />
        <Route element={<ComponentPage />} path="components/:slug" />
      </Route>
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}

export default App
