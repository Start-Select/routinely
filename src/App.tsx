import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'

// Placeholder pages — replaced phase by phase
function TodayPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-white">Today</h1>
      <p className="text-gray-500 mt-1 text-sm">Your habits for today will appear here.</p>
    </div>
  )
}

function HabitsPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-white">Habits</h1>
      <p className="text-gray-500 mt-1 text-sm">Manage your habits here.</p>
    </div>
  )
}

function ProgressPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-white">Progress</h1>
      <p className="text-gray-500 mt-1 text-sm">Your stats and streaks will appear here.</p>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-white">Settings</h1>
      <p className="text-gray-500 mt-1 text-sm">Account settings will appear here.</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-[#0a0a0f]">
      <main className="flex-1 overflow-y-auto pb-16">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
