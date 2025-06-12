import { useState }    from 'react'
import { useNavigate } from 'react-router-dom'

const stores    = [/*…*/]
const intervals = [/*…*/]
const rowData   = [
  { metric:'Total Sales', value:'$12,345' },
  { metric:'Leads',       value:'123' },
  // …
]

export default function GrandDashboard() {
  const nav = useNavigate()
  const [store, setStore]  = useState(stores[0])
  const [when,  setWhen]   = useState(intervals[0])

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={()=>nav(-1)} className="text-teal-600">← Back</button>
        <h1 className="text-xl font-bold">Grand Dashboard</h1>
        <button className="bg-teal-600 text-white px-4 py-2 rounded">
          Export PDF/CSV
        </button>
      </div>

      <div className="flex space-x-4">
        <select value={store} onChange={e=>setStore(e.target.value)} className="border p-2 rounded flex-1">
          {stores.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={when} onChange={e=>setWhen(e.target.value)} className="border p-2 rounded flex-1">
          {intervals.map(i=> <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      <div className="overflow-auto border rounded">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Metric</th>
              <th className="px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((r,i)=>(
              <tr key={i} className={i%2?'bg-white':'bg-gray-100'}>
                <td className="px-4 py-2">{r.metric}</td>
                <td className="px-4 py-2">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
