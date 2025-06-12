import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import SalesReport from './pages/SalesReport.jsx'
import GrandDashboard from './pages/GrandDashboard.jsx'
import SalespersonDashboard from './pages/SalespersonDashboard.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-report" element={<SalesReport />} />
            <Route path="/dashboard" element={<GrandDashboard />} />
            <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}