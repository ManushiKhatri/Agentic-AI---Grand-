import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar         from './components/Sidebar'
import Home            from './pages/Home'
import SalesReport     from './pages/SalesReport'
import GrandDashboard  from './pages/GrandDashboard'
import SalespersonDashboard from './pages/SalespersonDashboard'
import Settings        from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/sales-report"          element={<SalesReport />} />
            <Route path="/dashboard"             element={<GrandDashboard />} />
            <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
            <Route path="/settings"              element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

