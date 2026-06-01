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
          title={<>사용자 경험을<br /><span className="italic">설계하는</span> 개발자.</>}
          sub="화면 하나, 인터랙션 하나가 사용자가 느끼는 서비스의 완성도를 바꾼다고 믿습니다."
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              React와 JavaScript를 기반으로 4개의 팀 프로젝트를 수행하며 컴포넌트 설계, 상태 관리,
              실시간 통신, AI 모델 연동까지 폭넓게 경험했습니다. 그중 두 프로젝트에서 프론트엔드
              팀장을 맡아 구조 설계와 일정 관리를 주도했습니다.
            </p>
            <p className="text-muted">
              Mediapipe HandLandmarker로 손 랜드마크를 추출해 브라우저 단독으로 한글 수어 인식
              파이프라인을 구현하고, FSD 아키텍처로 유지보수성을 끌어올린 경험을 통해 단순 기능
              구현을 넘어 사용자 경험 전체를 책임지는 방향으로 성장하고 있습니다.
            </p>
            <p className="text-muted">
              새로운 기술을 빠르게 습득하고, 문제를 분석적으로 접근해 완성도 높은 결과물을
              만들어내는 것을 목표로 합니다.
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
