import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { timeline } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          index="01"
          label="About"
          title={<>끝까지<br /><span className="italic">풀어내는</span> 개발자.</>}
          sub="물류 현장의 4년이 만들어 준 정확성과 책임감을, 사용자가 직접 닿는 화면 위로 옮기는 중입니다."
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              물류 현장에서 4년간 일하며 반복 업무 속에서도 프로세스를 개선하는 일에 흥미를 느꼈고,
              기술로 더 나은 사용자 경험을 만들고 싶다는 목표로 SSAFY 12기에 합류해 프론트엔드
              개발자로 전향했습니다.
            </p>
            <p className="text-muted">
              React와 JavaScript를 기반으로 4개의 팀 프로젝트를 수행하며 컴포넌트 설계, 상태 관리,
              실시간 통신, AI 모델 연동까지 폭넓게 경험했습니다. 그중 두 프로젝트에서 프론트엔드
              팀장을 맡아 구조 설계와 일정 관리를 주도했습니다.
            </p>
            <p className="text-muted">
              특히 Python 기반 수어 인식 모델을 JavaScript 환경으로 포팅해 브라우저에서 실시간
              동작시킨 경험과 FSD 아키텍처로 유지보수성을 끌어올린 경험을 통해, 단순 기능 구현을
              넘어 문제를 끝까지 풀어내는 개발자로 성장하고 있습니다.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
              ⟶ Timeline
            </div>
            <ul className="space-y-0">
              {timeline.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="grid grid-cols-12 gap-4 py-6 border-t border-line last:border-b group"
                >
                  <div className="col-span-4 font-mono text-[11px] uppercase tracking-wider text-muted pt-1">
                    {t.year}
                  </div>
                  <div className="col-span-8">
                    <div className="font-display text-2xl tracking-tight">{t.title}</div>
                    <div className="text-sm text-muted mt-1">{t.place}</div>
                    <p className="text-sm mt-3 leading-relaxed">{t.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
