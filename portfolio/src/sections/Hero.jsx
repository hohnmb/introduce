import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const marqueeWords = [
  'React', '·', 'TypeScript', '·', 'WebSocket', '·', 'OpenVidu',
  '·', 'Zustand', '·', 'TailwindCSS', '·', 'Real-time UI', '·',
  'WebRTC', '·', 'TensorFlow.js', '·',
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      {/* 메타 정보 — 좌상단 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-28 md:top-32 left-6 md:left-12 font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
      >
        <div>Portfolio / 2026</div>
        <div className="mt-1">{profile.contact.location}</div>
      </motion.div>

      {/* 인덱스 — 우상단 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-28 md:top-32 right-6 md:right-12 font-mono text-[10px] uppercase tracking-[0.25em] text-muted text-right"
      >
        <div>No. 001 — {profile.nameEn}</div>
        <div className="mt-1">Available for hire</div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* 타이틀 */}
        <div className="space-y-2 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[20vw] md:text-[14vw] leading-[0.85] tracking-tightest"
          >
            Frontend
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end gap-4 md:gap-8 flex-wrap"
          >
            <h1 className="font-display italic text-[20vw] md:text-[14vw] leading-[0.85] tracking-tightest">
              Developer
            </h1>

            <div className="pb-3 md:pb-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted max-w-xs">
              <div className="h-px w-12 bg-ink mb-3" />
              <div>2026 ─ Lee Seongwook</div>
              <div className="mt-1">Seoul, South Korea</div>
            </div>
          </motion.div>
        </div>

        {/* 서브카피 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="mt-12 md:mt-20 grid md:grid-cols-12 gap-6 md:gap-12"
        >
          <div className="md:col-span-5 md:col-start-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
              ⟶ Currently
            </p>
            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {profile.tagline}
              <span className="caret ml-1">_</span>
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
              ⟶ Philosophy
            </p>
            <p className="text-base text-muted leading-relaxed">{profile.intro}</p>
          </div>
        </motion.div>
      </div>

      {/* 마키 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative mt-12 border-y border-line py-4 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className={`font-display text-2xl md:text-3xl px-4 ${
                w === '·' ? 'text-accent' : 'italic'
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-24 right-6 md:right-12 font-mono text-[10px] uppercase tracking-[0.25em] text-muted hidden md:flex items-center gap-2"
      >
        <span>Scroll</span>
        <span className="block w-12 h-px bg-ink" />
      </motion.div>
    </section>
  )
}
