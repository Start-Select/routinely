import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/today', label: 'Today', icon: '📅' },
  { to: '/habits', label: 'Habits', icon: '✅' },
  { to: '/progress', label: 'Progress', icon: '📊' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f] border-t border-gray-800 flex safe-area-bottom">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center py-3 gap-0.5 text-xs transition-colors ${
              isActive ? 'text-indigo-400' : 'text-gray-600'
            }`
          }
        >
          <span className="text-xl leading-none">{tab.icon}</span>
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
