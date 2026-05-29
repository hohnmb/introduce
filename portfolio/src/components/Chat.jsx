import { useState, useRef, useEffect } from 'react'

const API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8080'

const SUGGESTED = [
  '가장 자신 있는 기술이 뭔가요?',
  '말랑 프로젝트에서 어떤 역할을 했나요?',
  'FSD 아키텍처 경험이 있나요?',
  '팀장 경험에 대해 알려주세요.',
]

export default function Chat({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: '안녕하세요! 이성욱의 포트폴리오 챗봇입니다. 프로젝트, 기술 스택, 경험 등 무엇이든 물어보세요.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const history = messages
    .slice(1) // 첫 인사 메시지 제외
    .map((m) => ({ role: m.role, parts: [m.text] }))

  async function send(text) {
    if (!text.trim() || loading) return

    const userMsg = { role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'model', text: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="flex flex-col bg-paper border border-line rounded-2xl shadow-xl overflow-hidden"
      style={{ width: 380, height: 520 }}>

      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-medium text-ink font-kr">이성욱에게 물어보기</span>
        </div>
        <button
          onClick={onClose}
          className="text-muted hover:text-ink transition-colors text-lg leading-none"
          aria-label="닫기"
        >
          ×
        </button>
      </div>

      {/* 메시지 목록 */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed font-kr whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-ink text-paper'
                  : 'bg-line text-ink'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-line text-muted px-3 py-2 rounded-xl text-sm font-kr">
              <span className="animate-pulse">생각하는 중…</span>
            </div>
          </div>
        )}

        {/* 추천 질문 — 첫 메시지 이후에만 표시 */}
        {messages.length === 1 && (
          <div className="space-y-1.5 pt-1">
            {SUGGESTED.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="block w-full text-left text-xs text-muted border border-line rounded-lg px-3 py-2 hover:border-ink hover:text-ink transition-colors font-kr"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* 입력창 */}
      <div className="px-4 py-3 border-t border-line flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="질문을 입력하세요…"
          className="flex-1 bg-transparent text-sm text-ink placeholder-muted outline-none font-kr"
          disabled={loading}
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="text-sm font-medium text-accent disabled:text-muted transition-colors font-kr"
        >
          전송
        </button>
      </div>
    </div>
  )
}
