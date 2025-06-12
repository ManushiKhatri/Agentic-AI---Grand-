import React, { useState } from 'react'
import PageCard from '../components/PageCard.jsx'
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
export default function SalesReport() {
  const stores = ['Store A','Store B','Store C','Store D','Store E','All']
  const intervals = ['Today','This Month','Last 3 Months','Last 6 Months']
  const pieData = [{ name:'Sedans', value:240 },{ name:'SUVs', value:130 },{ name:'Trucks', value:200 },{ name:'EVs', value:50 }]
  const barData = [{ name:'Jan', sales:400 },{ name:'Feb', sales:300 },{ name:'Mar', sales:500 },{ name:'Apr', sales:450 },{ name:'May', sales:600 }]
  const [store, setStore] = useState(stores[0])
  const [when, setWhen] = useState(intervals[0])

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
      title="Sales Report"
      filters={filters}
      onExport={() => alert(`Exporting ${store} / ${when}`)}
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-lg font-medium text-white mb-2">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <Bar dataKey="sales" fill="#22D3EE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-lg font-medium text-white mb-2">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80}>
                {pieData.map((_,i) => (
                  <Cell key={i} fill={['#10B981','#3B82F6','#F59E0B','#EF4444'][i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 bg-gray-800 rounded-xl p-4">
        <table className="w-full text-gray-200">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-2 text-left">KPI</th>
              <th className="px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Total Sales</td>
              <td className="px-4 py-2">4,398</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Total Leads</td>
              <td className="px-4 py-2">1,230</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageCard>
  )
}