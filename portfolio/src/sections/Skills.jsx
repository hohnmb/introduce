import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60">
            <span>(02)</span>
            <span className="flex-1 h-px bg-paper/20" />
            <span>Skills</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tightest leading-[0.95]">
            도구는 손에 익을 때<br />
            <span className="italic text-paper/70">비로소 도구가 됩니다.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: gi * 0.1 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-6 flex items-center gap-3">
                <span>{String(gi + 1).padStart(2, '0')}</span>
                <span>{group.group}</span>
              </div>
              <ul className="space-y-0 border-t border-paper/10">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-baseline justify-between gap-4 py-3 border-b border-paper/10 group hover:border-accent transition-colors"
                  >
                    <span className={`${s.primary ? 'font-display italic text-2xl' : 'text-base'} group-hover:text-accent transition-colors`}>
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/50">
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
