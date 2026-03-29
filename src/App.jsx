import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import MobileBottomNav from './components/MobileBottomNav'
import TeamPage from './pages/TeamPage'
import ProjectsPage from './pages/ProjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import DocsPage from './pages/DocsPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

export default function App(){
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface min-h-screen">
        <TopNav />
        <SideNav />

        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <div className="fixed bottom-24 right-6 hidden md:block">
          <button className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_12px_32px_rgba(0,81,176,0.3)] flex items-center justify-center active:scale-95 transition-transform z-40">
            <span className="material-symbols-outlined text-2xl">add</span>
          </button>
        </div>

        <MobileBottomNav />
      </div>
    </BrowserRouter>
  )
}
