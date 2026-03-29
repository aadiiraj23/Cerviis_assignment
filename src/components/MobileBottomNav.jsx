import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/team', label: 'Team', icon: 'group' },
  { to: '/projects', label: 'Projects', icon: 'account_tree' },
  { to: '/resources', label: 'Resources', icon: 'layers' },
  { to: '/docs', label: 'Docs', icon: 'description' },
  { to: '/settings', label: 'Settings', icon: 'settings' }
]

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-50 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_24px_rgba(25,28,30,0.04)] md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center relative transition-colors ${
              isActive
                ? 'text-[#2563EB] dark:text-blue-400 after:content-[\'\'] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-[#2563EB] after:rounded-full'
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
            }`
          }
        >
          <span className="material-symbols-outlined mb-1">{item.icon}</span>
          <span className="font-body text-[11px] font-medium tracking-wide uppercase">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
