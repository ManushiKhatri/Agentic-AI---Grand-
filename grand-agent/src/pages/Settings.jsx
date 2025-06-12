import { useNavigate } from 'react-router-dom'

export default function Settings() {
  const nav = useNavigate()
  // TODO: pull real user data from your auth/context
  const user = { name:'Jane Doe', email:'jane@example.com', role:'Manager' }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={()=>nav(-1)} className="text-teal-600">← Back</button>
        <h1 className="text-xl font-bold">Settings</h1>
        <div style={{width:24}}></div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-xl">
          {user.name.charAt(0)}
        </div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>

      <div className="space-y-2">
        <button className="w-full border rounded px-4 py-2 text-left">Chatbot Settings / Agent Settings</button>
        <button className="w-full border rounded px-4 py-2 text-left">Security & Privacy</button>
        <button className="w-full border rounded px-4 py-2 text-left">Help & Support</button>
        <button className="w-full border rounded px-4 py-2 text-left text-red-600">Logout</button>
      </div>
    </div>
  )
}
