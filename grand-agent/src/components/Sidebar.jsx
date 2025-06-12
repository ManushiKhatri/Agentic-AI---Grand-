import { NavLink } from 'react-router-dom'

const items = [
  { to: '/',                      label: 'Home' },
  { to: '/sales-report',          label: 'Sales Report' },
  { to: '/dashboard',             label: 'Grand Dashboard' },
  { to: '/salesperson-dashboard', label: 'Sales Person Dashboard' },
  { to: '/inventory',             label: 'Inventory' },
  { to: '/hr',                    label: 'HR' },
  { to: '/settings',              label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-full">
      <div className="p-4 text-xl font-bold text-gray-800">Grand MotorCars</div>
      <nav className="flex flex-col space-y-1">
        {items.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-gray-100 ${
                isActive ? 'bg-gray-200 font-semibold' : 'text-gray-700'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
