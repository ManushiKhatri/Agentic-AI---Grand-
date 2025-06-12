import { useState }    from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts'

const stores    = ['Store A','Store B','Store C','Store D','Store E','All']
const intervals = ['Today','This Month','Last 3 Months','Last 6 Months']

// dummy data
const barData = [
  { name:'Jan', sales:400 },
  { name:'Feb', sales:300 },
  { name:'Mar', sales:500 }
]
const pieData = [
  { name:'A', value:240 },
  { name:'B', value:130 },
  { name:'C', value:200 }
]

export default function SalesReport() {
  const nav = useNavigate()
  const [store, setStore]  = useState(stores[0])
  const [when,  setWhen]   = useState(intervals[0])

  const handleExport = () => {
    // TODO: use jsPDF / react-csv here
    alert('Exporting PDF/CSV…')
  }

  return (
    <div className="p-6 space-y-4 h-full overflow-auto">
      <div className="flex items-center justify-between">
        <button onClick={()=>nav(-1)} className="text-teal-600">← Back</button>
        <h1 className="text-xl font-bold">Sales Report</h1>
        <button
          onClick={handleExport}
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          Export PDF/CSV
        </button>
      </div>

      <div className="flex space-x-4">
        <select
          value={store}
          onChange={e=>setStore(e.target.value)}
          className="border p-2 rounded flex-1"
        >
          {stores.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
        <select
          value={when}
          onChange={e=>setWhen(e.target.value)}
          className="border p-2 rounded flex-1"
        >
          {intervals.map(i=> <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Pie */}
        <div className="border rounded p-4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                {pieData.map((entry,i)=>
                  <Cell key={i} fill={['#facc15','#dc2626','#34d399'][i%3]} />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Bar */}
        <div className="border rounded p-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
