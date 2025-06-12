import React from 'react'
import PageCard from '../components/PageCard.jsx'
import SettingsMenu from '../components/SettingsMenu.jsx'
export default function Settings() {
  const user = { name:'Manushi Khatri', email:'manushi@gmail.com', role:'Intern' }
  return (
    <div className="flex flex-1 overflow-auto">
      <SettingsMenu />
      <PageCard title="Settings">
        <div className="bg-gray-800 rounded-xl p-6 flex items-center space-x-6 mb-6">
          <div className="h-16 w-16 bg-gray-700 rounded-full" />
          <div className="text-gray-200">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>
        <div className="space-y-2">
          {['Chatbot Settings / Agent Settings','Security & Privacy','Help & Support','Logout'].map((label,i) => (
            <button
              key={i}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                label === 'Logout'
                  ? 'bg-gray-900 text-red-500 hover:bg-gray-800'
                  : 'bg-gray-900 text-gray-200 hover:bg-gray-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </PageCard>
    </div>
  )
}