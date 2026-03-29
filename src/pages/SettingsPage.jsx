import React from 'react'
import { NavLink } from 'react-router-dom'

const toggles = [
  { title: 'Email Briefing', subtitle: 'Daily architectural summary', enabled: true, icon: 'mail' },
  { title: 'Push Alerts', subtitle: 'Real-time collaboration pings', enabled: true, icon: 'notifications_active' }
]

const security = [
  { title: 'Encryption Protocols', subtitle: 'Manage 256-bit vault keys', icon: 'lock' },
  { title: 'Biometric Access', subtitle: 'FaceID and TouchID configuration', icon: 'fingerprint' }
]

export default function SettingsPage() {
  return (
    <main className="md:ml-64 max-w-3xl px-6 pt-24 pb-32">
      <div className="mb-12">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-2">System Settings</h2>
        <p className="font-body text-on-surface-variant text-sm">Configure your precision environment and account protocols.</p>
      </div>

      <div className="space-y-10">
        <section>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_rgba(25,28,30,0.04)]">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <p className="font-headline text-lg font-bold">Personal Identity</p>
              <p className="font-label text-xs text-on-surface-variant mt-1">Manage public visibility and bio.</p>
              <NavLink to="/profile" className="inline-flex mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                Open Profile
              </NavLink>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase mb-1">Status</span>
                <span className="font-headline text-xl font-bold">Active</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(0,81,176,0.4)]"></div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Notifications</h3>
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            {toggles.map((item, index) => (
              <div
                key={item.title}
                className={`p-5 flex items-center justify-between ${index === 0 ? 'bg-surface-container-lowest' : 'border-t border-surface-container-highest/10'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-secondary-container">
                    <span className="material-symbols-outlined text-on-secondary-container">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold">{item.title}</p>
                    <p className="font-label text-[11px] text-on-surface-variant">{item.subtitle}</p>
                  </div>
                </div>
                <button className="w-11 h-6 rounded-full bg-primary relative">
                  <span className="absolute top-[2px] right-[2px] bg-white h-5 w-5 rounded-full"></span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Security</h3>
          <div className="flex flex-col gap-3">
            {security.map((item) => (
              <button key={item.title} className="w-full text-left p-6 bg-surface-container-lowest rounded-xl flex items-center justify-between hover:bg-surface-bright transition-colors group">
                <div className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{item.icon}</span>
                  <div>
                    <p className="font-body text-sm font-semibold">{item.title}</p>
                    <p className="font-label text-[11px] text-on-surface-variant">{item.subtitle}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-surface-container-highest">chevron_right</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">General</h3>
          <div className="bg-surface-container-low rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="font-body text-sm font-semibold">Measurement System</p>
                <p className="font-label text-[11px] text-on-surface-variant">Metric / Imperial defaults</p>
              </div>
              <div className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Metric</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm font-semibold">Interface Theme</p>
                <p className="font-label text-[11px] text-on-surface-variant">System-wide aesthetic</p>
              </div>
              <div className="flex gap-1 bg-surface-container-high p-1 rounded-lg">
                <button className="px-3 py-1 bg-surface-container-lowest rounded-md text-[10px] font-bold shadow-sm">Light</button>
                <button className="px-3 py-1 text-on-surface-variant text-[10px] font-bold">Dark</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <button className="w-full py-4 px-6 border border-error/20 text-error rounded-xl font-headline text-sm font-bold flex items-center justify-center gap-2 hover:bg-error/5 transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span>
            Terminate Session
          </button>
        </section>
      </div>
    </main>
  )
}
