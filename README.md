# Architect | Multi-Page Frontend (React + Vite)

A premium multi-page React + Vite frontend with routed sections for Team, Projects, Resources, Docs, Analytics, Settings, and Profile. Built with Tailwind CSS tokens and Material Symbols.

## What Is Implemented

- Client-side routing with `react-router-dom`
- Dedicated pages for:
	- `/analytics` (default homepage)
	- `/team`
	- `/projects`
	- `/resources`
	- `/docs`
	- `/settings`
	- `/profile`
- Responsive navigation:
	- Top app bar actions (notifications, settings, profile)
	- Desktop sidebar navigation
	- Mobile bottom tab navigation
- Profile linking integrated from multiple entry points:
	- Sidebar profile tile
	- Top-right avatar
	- Team lead card (Marcus Chen)
	- Settings profile card shortcut

## Analytics Module

The Analytics page contains the real-time dashboard module with:

- Auto-refresh every 60 seconds
- Live countdown timer
- Manual refresh button
- AbortController cleanup for in-flight fetches
- Simulated system stat refresh (latency, CPU, memory)

Data source used for demo data:

- `https://jsonplaceholder.typicode.com/users`

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

Production output is generated in `dist/`.

## Project Structure

```text
src/
	App.jsx
	Dashboard.jsx
	main.jsx
	styles.css
	components/
		MobileBottomNav.jsx
		SideNav.jsx
		TopNav.jsx
		InsightCards.jsx
		ProjectCards.jsx
	pages/
		AnalyticsPage.jsx
		DocsPage.jsx
		ProfilePage.jsx
		ProjectsPage.jsx
		ResourcesPage.jsx
		SettingsPage.jsx
		TeamPage.jsx
```

## Notes

- Homepage route is configured to redirect from `/` to `/analytics`.
- Sidebar and mobile bottom tabs are the primary page navigation surfaces.

