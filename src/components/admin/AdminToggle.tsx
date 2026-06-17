import { useState } from 'react'
import AdminPanel from './AdminPanel'

export default function AdminToggle() {
  const [showPanel, setShowPanel] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-dark rounded-full shadow-lg hover:bg-yellow-400 z-30 flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Admin"
      >
        ⚙️
      </button>
      <AdminPanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
    </>
  )
}
