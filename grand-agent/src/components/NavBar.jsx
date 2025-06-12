import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  ChatBubbleLeftEllipsisIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const navItems = [
  { to: '/',                    label: 'Home',                icon: ChatBubbleLeftEllipsisIcon },
  { to: '/sales-report',       label: 'Sales Report',        icon: ChartBarIcon            },
  { to: '/dashboard',          label: 'Grand Dashboard',     icon: ArrowTrendingUpIcon     },
  { to: '/salesperson-dashboard', label: 'Salesperson',      icon: UserIcon                },
  { to: '/settings',           label: 'Settings',            icon: UserIcon                },
]

export default function NavBar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <ul className="flex space-x-6 px-6 py-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm font-medium px-3 py-1 transition-colors rounded-md ${
                  isActive
                    ? 'text-white bg-gray-700'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
