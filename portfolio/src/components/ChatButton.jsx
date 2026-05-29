import { useState } from 'react'
import Chat from './Chat'

export default function ChatButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && <Chat onClose={() => setOpen(false)} />}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="챗봇 열기"
        className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
      >
        {open ? (
          // X 아이콘
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // 말풍선 아이콘
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6l-4 4V4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
