import React from 'react'
import { NavLink } from 'react-router-dom'
const items = ['Profile','Account','Notifications','Appearance','Security','Data & Privacy','Help']
export default function SettingsMenu() {
  return (
    <aside className="w-48 bg-gray-900 border-r border-gray-700 p-4 space-y-2">
      {items.map(label => (
        <NavLink
          key={label}
          to={label.toLowerCase().replace(/ & /, '-').replace(/ /g, '-')}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </aside>
  )
}