import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { writings } from '../data/profile'

export default function Writings() {
  return (
    <section id="writings" className="py-24 md:py-40 px-6 md:px-12 bg-ink/[0.02]">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          index="05"
          label="Writings"
          title={<>기록하면서<br /><span className="italic">배웁니다.</span></>}
          sub="프로젝트별 트러블슈팅과 회고를 정리했습니다. 추후 블로그 포스팅으로 이어질 예정입니다."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {writings.map((w, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border border-line bg-paper p-6 md:p-8 flex flex-col gap-4 group hover:border-ink transition-colors"
            >
              <div className="flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span>{w.date}</span>
              </div>
              <h3 className="font-display text-2xl tracking-tight leading-snug group-hover:text-accent transition-colors">
                {w.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{w.summary}</p>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
                # {w.tag}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          More writings coming soon
        </div>
      </div>
    </section>
  )
}
