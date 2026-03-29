import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/team', label: 'Team', icon: 'group' },
  { to: '/projects', label: 'Projects', icon: 'account_tree' },
  { to: '/resources', label: 'Resources', icon: 'inventory_2' },
  { to: '/docs', label: 'Documents', icon: 'description' },
  { to: '/analytics', label: 'Analytics', icon: 'analytics' },
  { to: '/settings', label: 'Settings', icon: 'settings' }
]

export default function SideNav(){
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/10 bg-[#fcf8f9] dark:bg-slate-950 hidden md:block">
      <div className="flex flex-col p-4 pt-20 h-full">
        <NavLink to="/profile" className="flex items-center gap-3 mb-10 px-2 rounded-lg py-2 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 transition-colors">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#0f2b3a] flex items-center justify-center">
            <img
              alt="Marcus Chen profile"
              className="w-full h-full object-cover"
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus"
            />
          </div>
          <div>
            <div className="text-lg font-bold text-[#323235] dark:text-white font-headline leading-none">Marcus Chen</div>
            <div className="text-xs text-on-surface-variant font-medium">Principal Architect</div>
          </div>
        </NavLink>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 font-manrope text-sm font-medium rounded-md p-3 transition-all duration-200 ease-in-out ${
                  isActive
                    ? 'bg-[#d5e3fd] dark:bg-[#006592]/20 text-[#455367] dark:text-blue-200'
                    : 'text-[#5f5f61] dark:text-slate-400 hover:bg-[#e4e2e5] dark:hover:bg-slate-800'
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
      </div>
    </aside>
  )
}
