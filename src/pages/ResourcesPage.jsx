import React from 'react'

const equipment = [
  { name: 'Leica BLK360 G1', type: 'Laser Scanner', id: '#SCN-042', status: 'Available', icon: 'precision_manufacturing' },
  { name: 'Hilti PLT 300', type: 'Layout Tool', id: 'Assigned: J. Miller', status: 'In Use', icon: 'architecture' },
  { name: 'Workstation Pro 08', type: 'M2 Ultra', id: 'Rendering Node', status: 'Available', icon: 'laptop_mac' }
]

const licenses = [
  { name: 'Revit Pro', status: '12 Seats Free', icon: 'layers' },
  { name: 'Rhino 7', status: 'Active License', icon: 'polyline' }
]

export default function ResourcesPage() {
  return (
    <main className="md:ml-64 pt-24 pb-32 px-6 max-w-5xl">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Resources</h2>
        <p className="text-on-surface-variant text-sm mt-1">Operational assets and hardware inventory.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
        <div className="bg-surface-container-lowest p-5 rounded-xl shadow-[0_12px_32px_rgba(25,28,30,0.04)]">
          <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Total Assets</div>
          <div className="font-headline text-2xl font-bold mt-2">142</div>
        </div>
        <div className="bg-primary p-5 rounded-xl shadow-[0_12px_32px_rgba(0,81,176,0.1)] text-on-primary">
          <div className="text-[10px] font-bold uppercase tracking-widest text-on-primary/70">Budget</div>
          <div className="font-headline text-2xl font-bold mt-2">$42.8k</div>
        </div>
      </div>

      <section className="space-y-4 mb-10">
        <h3 className="font-headline text-lg font-bold">Hardware and Equipment</h3>
        {equipment.map((item) => (
          <div key={item.name} className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start gap-3">
                <h4 className="font-semibold text-on-surface text-sm">{item.name}</h4>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                    item.status === 'Available'
                      ? 'bg-secondary-fixed text-primary'
                      : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-on-surface-variant text-xs mt-1">
                {item.type} • {item.id}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h3 className="font-headline text-lg font-bold mb-4">Budget and Credits</h3>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
          <div className="p-5 border-b border-surface-container">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-bold text-on-surface font-headline">Cloud Computing</h4>
                <p className="text-on-surface-variant text-xs">Quarterly Allocation</p>
              </div>
              <div className="text-right">
                <span className="text-primary font-bold text-sm">$12,400</span>
                <p className="text-on-surface-variant text-[10px] uppercase font-bold">Remaining</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[72%] rounded-full"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant">
              <span>72% Consumed</span>
              <span>$18,000 Total</span>
            </div>
          </div>
          <div className="p-5 bg-surface-container-low/30 flex justify-between">
            <span className="text-on-surface text-sm font-medium">API Credits</span>
            <span className="font-mono text-xs font-bold text-on-surface-variant">42,800 units</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-headline text-lg font-bold mb-4">Digital Licenses</h3>
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          {licenses.map((license) => (
            <div key={license.name} className="bg-surface-container-lowest p-4 rounded-xl border border-transparent hover:border-primary/10 transition-colors">
              <div className="w-10 h-10 mb-3 bg-secondary-fixed rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{license.icon}</span>
              </div>
              <h4 className="font-bold text-on-surface text-sm">{license.name}</h4>
              <p className="text-on-surface-variant text-[10px] uppercase font-bold mt-1">{license.status}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
