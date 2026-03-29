import React, { useEffect, useState, useRef, useCallback } from 'react'
import ProjectCards from './components/ProjectCards'
import InsightCards from './components/InsightCards'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default function Dashboard(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [countdown, setCountdown] = useState(60)
  const [systemStats, setSystemStats] = useState({
    latency: '14ms',
    cpu: '24%',
    memory: '4.2GB'
  })

  const abortRef = useRef(null)
  const refreshRef = useRef(null)
  const countdownRef = useRef(null)

  const fetchData = useCallback(async (signal) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL, { signal })
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setItems(data.slice(0, 12))
      setCountdown(60)
      
      // Simulate system stats update
      setSystemStats({
        latency: `${Math.floor(Math.random() * 20 + 10)}ms`,
        cpu: `${Math.floor(Math.random() * 40 + 15)}%`,
        memory: `${(Math.random() * 3 + 3).toFixed(1)}GB`
      })
    } catch (err) {
      if (err.name === 'AbortError') return
      setError(err.message || 'Fetch error')
    } finally {
      setLoading(false)
    }
  }, [])

  const refreshNow = useCallback(() => {
    if (abortRef.current) abortRef.current.abort()
    const ac = new AbortController()
    abortRef.current = ac
    fetchData(ac.signal)
  }, [fetchData])

  useEffect(() => {
    // initial fetch
    refreshNow()

    // periodic refresh every 60 seconds
    refreshRef.current = setInterval(() => {
      refreshNow()
    }, 60000)

    // countdown timer updates every second
    countdownRef.current = setInterval(() => {
      setCountdown(prev => (prev <= 1 ? 60 : prev - 1))
    }, 1000)

    return () => {
      if (refreshRef.current) clearInterval(refreshRef.current)
      if (countdownRef.current) clearInterval(countdownRef.current)
      if (abortRef.current) abortRef.current.abort()
    }
  }, [refreshNow])

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
      {/* Large Analytics Card with Data List */}
      <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-[0px_20px_40px_rgba(50,50,53,0.06)] relative overflow-hidden group">
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <h3 className="text-xl font-bold font-headline mb-1">Performance Analytics</h3>
            <p className="text-sm text-on-surface-variant">Real-time data sync with live countdown</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary-container text-on-primary-container text-xs font-bold rounded-full">Live</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full">Auto-Refresh</span>
          </div>
        </div>

        {/* Data List */}
        <div className="h-96 overflow-y-auto relative z-10 mb-6">
          {loading && !items.length && (
            <div className="flex items-center justify-center h-full text-on-surface-variant">
              <div className="animate-spin">
                <span className="material-symbols-outlined">hourglass_empty</span>
              </div>
              <span className="ml-2">Loading…</span>
            </div>
          )}
          
          {error && (
            <div className="text-error-dim font-medium p-4 bg-error-container/10 rounded-lg">
              Error: {error}
            </div>
          )}

          <div className="space-y-3">
            {items.map(item => (
              <div key={item.id} className="p-4 bg-surface-container-high rounded-lg hover:bg-surface-container transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface">{item.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{item.email}</p>
                    <p className="text-xs text-on-surface-variant">Phone: {item.phone}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-tertiary">User #{item.id}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background visual texture */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      {/* System Status Sidebar */}
      <div className="md:col-span-4 flex flex-col gap-6">
        {/* Status Card */}
        <div className="bg-primary bg-gradient-to-br from-primary to-primary-dim rounded-xl p-6 text-on-primary shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="material-symbols-outlined opacity-80">sensors</span>
            <span className="text-xs font-bold tracking-widest uppercase opacity-80">System Status</span>
          </div>
          <div className="text-3xl font-bold font-headline mb-1">99.98%</div>
          <div className="text-sm opacity-90 mb-6">Uptime globally verified</div>
          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
            <div className="bg-white h-full w-[99%]"></div>
          </div>
        </div>

        {/* Countdown & Stats */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_20px_40px_rgba(50,50,53,0.06)]">
          <div className="mb-6 p-4 bg-primary-container rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-headline">{countdown}s</div>
              <div className="text-xs text-on-primary-container mt-1">Next update in</div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-bold font-headline text-sm">North America West</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Latency</span>
              <span className="font-medium">{systemStats.latency}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">CPU Load</span>
              <span className="font-medium">{systemStats.cpu}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Memory</span>
              <span className="font-medium">{systemStats.memory}</span>
            </div>
          </div>

          <button onClick={refreshNow} className="w-full mt-6 bg-primary text-on-primary py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
            Refresh Now
          </button>
        </div>
      </div>

      {/* Project Progress Section */}
      <div className="md:col-span-12 mt-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tight">Project Progress</h2>
            <p className="text-on-surface-variant">Active development cycles and milestones</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">View Roadmap</button>
        </div>
        <ProjectCards />
      </div>

      {/* Insights Section */}
      <div className="md:col-span-12">
        <InsightCards />
      </div>
    </section>
  )
}
