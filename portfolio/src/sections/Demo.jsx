import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

// 말랑 프로젝트의 핵심 아이디어 — Web Worker로 추론을 분리해 UI 프레임을 보호 — 을
// 시각화한 인터랙티브 데모. 마우스를 따라 손가락 키포인트를 그리며,
// '메인 스레드 부하 시뮬레이션' 토글로 thread blocking 차이를 체감하게 합니다.

const HAND_POINTS = [
  // 손목
  { id: 0, x: 0.5, y: 0.9 },
  // 엄지
  { id: 1, x: 0.35, y: 0.85 }, { id: 2, x: 0.28, y: 0.75 },
  { id: 3, x: 0.22, y: 0.65 }, { id: 4, x: 0.18, y: 0.55 },
  // 검지
  { id: 5, x: 0.42, y: 0.7 }, { id: 6, x: 0.4, y: 0.55 },
  { id: 7, x: 0.38, y: 0.4 }, { id: 8, x: 0.36, y: 0.28 },
  // 중지
  { id: 9, x: 0.5, y: 0.68 }, { id: 10, x: 0.5, y: 0.5 },
  { id: 11, x: 0.5, y: 0.32 }, { id: 12, x: 0.5, y: 0.18 },
  // 약지
  { id: 13, x: 0.58, y: 0.7 }, { id: 14, x: 0.6, y: 0.55 },
  { id: 15, x: 0.62, y: 0.4 }, { id: 16, x: 0.64, y: 0.28 },
  // 새끼
  { id: 17, x: 0.65, y: 0.78 }, { id: 18, x: 0.7, y: 0.68 },
  { id: 19, x: 0.74, y: 0.58 }, { id: 20, x: 0.78, y: 0.5 },
]

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
]

const PHRASES = ['안녕하세요', '반갑습니다', '감사합니다', '말랑입니다', '도와드릴게요']

export default function Demo() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const [recognized, setRecognized] = useState(PHRASES[0])
  const [fps, setFps] = useState(60)
  const [useWorker, setUseWorker] = useState(true)
  const [blocking, setBlocking] = useState(false)

  // 마우스 위치 → 손 위치
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMouse({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  // 가짜 인식 결과 변경
  useEffect(() => {
    const t = setInterval(() => {
      setRecognized(PHRASES[Math.floor(Math.random() * PHRASES.length)])
    }, 2200)
    return () => clearInterval(t)
  }, [])

  // FPS 측정 + 부하 시뮬레이션
  useEffect(() => {
    let raf
    let last = performance.now()
    let frames = 0
    let acc = 0

    const loop = (now) => {
      const dt = now - last
      last = now
      frames++
      acc += dt

      // 부하 시뮬레이션: useWorker가 false일 때만 메인 스레드를 막음
      if (blocking && !useWorker) {
        const start = performance.now()
        // 약 8ms 동안 빈 루프 — UI 프레임을 떨어뜨리는 효과
        while (performance.now() - start < 8) {
          Math.sqrt(Math.random() * 99999)
        }
      }

      if (acc >= 500) {
        setFps(Math.round((frames * 1000) / acc))
        frames = 0
        acc = 0
      }

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [blocking, useWorker])

  // 캔버스에 손 그리기
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // 격자 배경
      ctx.strokeStyle = 'rgba(10,10,10,0.06)'
      ctx.lineWidth = 1
      const step = 30
      for (let x = 0; x < rect.width; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, rect.height); ctx.stroke()
      }
      for (let y = 0; y < rect.height; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(rect.width, y); ctx.stroke()
      }

      // 마우스 위치를 중심으로 손 위치 계산
      const offsetX = (mouse.x - 0.5) * rect.width * 0.5
      const offsetY = (mouse.y - 0.5) * rect.height * 0.3
      const cx = rect.width / 2 + offsetX
      const cy = rect.height * 0.55 + offsetY
      const scale = Math.min(rect.width, rect.height) * 0.55

      const pts = HAND_POINTS.map(p => ({
        x: cx + (p.x - 0.5) * scale,
        y: cy + (p.y - 0.5) * scale,
      }))

      // 연결선
      ctx.strokeStyle = 'rgba(10,10,10,0.85)'
      ctx.lineWidth = 1.5
      ctx.lineCap = 'round'
      CONNECTIONS.forEach(([a, b]) => {
        ctx.beginPath()
        ctx.moveTo(pts[a].x, pts[a].y)
        ctx.lineTo(pts[b].x, pts[b].y)
        ctx.stroke()
      })

      // 키포인트
      pts.forEach((p, i) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, i === 0 ? 5 : 3, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#ff4d2e' : '#0a0a0a'
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [mouse])

  return (
    <section id="demo" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          index="04"
          label="Interactive Demo"
          title={<>모델은<br /><span className="italic">메인 스레드를</span> 막지 않습니다.</>}
          sub="말랑 프로젝트의 핵심 아이디어 — 무거운 추론 연산을 Web Worker로 분리해 UI 렌더링과 병렬 처리한 구조 — 를 인터랙티브하게 재현했습니다. 캔버스 위에서 마우스를 움직여 보세요."
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 캔버스 */}
          <div
            ref={containerRef}
            className="lg:col-span-8 relative aspect-[4/3] border border-line bg-paper overflow-hidden cursor-crosshair"
          >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* 오버레이 — 좌상단 */}
            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <div>● REC / sign_recognition</div>
              <div className="mt-1">model: tfjs-wasm</div>
            </div>

            {/* 오버레이 — 우상단 (FPS) */}
            <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-right">
              <div className="text-muted">FPS</div>
              <div className={`text-2xl font-display ${fps < 45 ? 'text-accent' : 'text-ink'}`}>
                {fps}
              </div>
            </div>

            {/* 오버레이 — 하단 인식 결과 */}
            <div className="absolute bottom-0 inset-x-0 p-6 border-t border-line bg-paper/90 backdrop-blur-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-2">
                ⟶ Recognized
              </div>
              <motion.div
                key={recognized}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-3xl md:text-4xl tracking-tight"
              >
                "{recognized}"
              </motion.div>
            </div>
          </div>

          {/* 컨트롤 */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-line p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                ⟶ Architecture
              </div>
              <div className="space-y-3 text-sm">
                <label className="flex items-center justify-between gap-3 cursor-pointer group">
                  <span>Web Worker 사용</span>
                  <button
                    onClick={() => setUseWorker(!useWorker)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${
                      useWorker ? 'bg-ink' : 'bg-line'
                    }`}
                    aria-pressed={useWorker}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-paper transition-transform ${
                        useWorker ? 'translate-x-5' : ''
                      }`}
                    />
                  </button>
                </label>
                <label className="flex items-center justify-between gap-3 cursor-pointer">
                  <span>모델 추론 부하</span>
                  <button
                    onClick={() => setBlocking(!blocking)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${
                      blocking ? 'bg-accent' : 'bg-line'
                    }`}
                    aria-pressed={blocking}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-paper transition-transform ${
                        blocking ? 'translate-x-5' : ''
                      }`}
                    />
                  </button>
                </label>
              </div>
            </div>

            <div className="border border-line p-6 bg-ink text-paper">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-3">
                ⟶ Trace
              </div>
              {useWorker ? (
                <p className="text-sm leading-relaxed">
                  <span className="text-accent">●</span> 추론이 별도 Worker 스레드에서 실행 중.
                  메인 스레드는 UI 렌더링에만 집중합니다.
                  {blocking && ' 부하가 와도 FPS가 떨어지지 않습니다.'}
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  <span className="text-accent">●</span> 메인 스레드에서 직접 추론.
                  {blocking
                    ? ' 부하가 발생하면 UI 프레임이 즉시 떨어집니다 ← 이게 포팅 직후의 문제였습니다.'
                    : ' Worker를 꺼도 평상시엔 괜찮아 보이지만…'}
                </p>
              )}
            </div>

            <div className="text-xs text-muted leading-relaxed">
              ※ 실제 프로젝트에서는 Mediapipe + TensorFlow.js + WebAssembly로 구현했습니다.
              이 데모는 그 구조적 아이디어를 단순화한 시각화입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
