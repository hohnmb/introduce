import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const items = [
    { label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { label: 'GitHub', value: `@${profile.contact.github}`, href: `https://github.com/${profile.contact.github}` },
    { label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone.replace(/-/g, '')}` },
    { label: 'Portfolio', value: 'Notion', href: profile.contact.portfolio },
  ]

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60">
          <span>(06)</span>
          <span className="flex-1 h-px bg-paper/20" />
          <span>Contact</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tightest mb-16"
        >
          Let's<br />
          <span className="italic text-paper/70">work together.</span>
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-base md:text-lg text-paper/80 leading-relaxed">
              새로운 팀과 새로운 문제를 만나는 일에 진심입니다. 신입 프론트엔드 개발자로서
              합류할 자리가 있다면 가볍게라도 인사 보내주세요.
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
              {profile.contact.location} / 정규직·계약직 모두 가능
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul className="border-t border-paper/10">
              {items.map((item) => (
                <li key={item.label} className="border-b border-paper/10">
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-baseline justify-between py-5 group"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60">
                      {item.label}
                    </span>
                    <span className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors flex items-center gap-3">
                      {item.value}
                      <span className="font-mono text-xs translate-y-[-2px] opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/40">
          <div>© 2026 Lee Seongwook</div>
          <div>Built with React · Vite · Tailwind · Framer Motion</div>
          <div>Last updated 2026.06</div>
        </div>
      </div>
    </section>
  )
}
