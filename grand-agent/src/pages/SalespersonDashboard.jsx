// src/pages/SalespersonDashboard.jsx

import React, { useState } from 'react'
import { useNavigate }   from 'react-router-dom'

const stores    = ['Store A','Store B','Store C','Store D','Store E','All']
const intervals = ['Today','This Month','Last 3 Months','Last 6 Months']

// Example KPI data for a salesperson
const rowData = [
  { metric: 'Total Sales',        value: '$8,240' },
  { metric: 'Leads Generated',    value: '32'      },
  { metric: 'Conversion Rate',    value: '27%'     },
  { metric: 'Avg. Deal Size',     value: '$515'    },
  { metric: 'Follow-ups Pending', value: '5'       },
]

export default function SalespersonDashboard() {
  const navigate = useNavigate()
  const [store, setStore]  = useState(stores[0])
  const [when,  setWhen]   = useState(intervals[0])

  const handleExport = () => {
    // TODO: wire up jsPDF / react-csv export here
    alert(`Exporting Salesperson dashboard for ${store} / ${when}`)
  }

  return (
    <div className="p-6 space-y-6 h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-teal-600 hover:underline"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">Sales Person Dashboard</h1>
        <button
          onClick={handleExport}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Export PDF/CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        <select
          value={store}
          onChange={e => setStore(e.target.value)}
          className="flex-1 border rounded p-2"
        >
          {stores.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={when}
          onChange={e => setWhen(e.target.value)}
          className="flex-1 border rounded p-2"
        >
          {intervals.map(i => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      {/* KPI Table */}
      <div className="overflow-auto border rounded shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Metric</th>
              <th className="px-4 py-2 text-left font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              >
                <td className="px-4 py-2">{row.metric}</td>
                <td className="px-4 py-2">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
