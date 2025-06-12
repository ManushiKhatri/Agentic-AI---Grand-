import React, { useState } from 'react'
import PageCard from '../components/PageCard.jsx'
export default function GrandDashboard() {
  const stores = ['Store A','Store B','Store C','Store D','Store E','All']
  const intervals = ['Today','This Month','Last 3 Months','Last 6 Months']
  const stats = [
    { label:'Total Sales',     value:'$145,230' },
    { label:'Total Leads',     value:'1,230'    },
    { label:'Avg Conversion',  value:'23%'      },
    { label:'Inventory Val',   value:'$520K'   }
  ]
  const [store, setStore] = useState(stores[0])
  const [when, setWhen]   = useState(intervals[0])

  const filters = (
    <>
      <select
        className="bg-gray-800 text-gray-200 border border-gray-700 rounded px-3 py-2"
        value={store}
        onChange={e => setStore(e.target.value)}
      >
        {stores.map(s => <option key={s}>{s}</option>)}
      </select>
      <select
        className="bg-gray-800 text-gray-200 border border-gray-700 rounded px-3 py-2"
        value={when}
        onChange={e => setWhen(e.target.value)}
      >
        {intervals.map(i => <option key={i}>{i}</option>)}
      </select>
    </>
  )

  return (
    <PageCard
      title="Grand Dashboard"
      filters={filters}
      onExport={() => alert(`Exporting ${store} / ${when}`)}
    >
      <div className="bg-gray-800 rounded-xl p-4">
        <table className="w-full text-gray-200">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-2 text-left">Metric</th>
              <th className="px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s,i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                <td className="px-4 py-2">{s.label}</td>
                <td className="px-4 py-2">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageCard>
  )
}
