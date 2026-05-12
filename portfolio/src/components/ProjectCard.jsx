import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-line group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-8 md:py-12 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-ink/[0.02]"
      >
        <div className="md:col-span-1 font-mono text-[11px] text-muted uppercase tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl md:text-5xl tracking-tightest leading-tight">
            {project.name}
            {project.featured && (
              <sup className="ml-2 font-mono text-[10px] uppercase tracking-widest text-accent align-top">
                ★ Featured
              </sup>
            )}
          </h3>
          <p className="mt-2 text-muted text-sm md:text-base">{project.subtitle}</p>
        </div>
        <div className="md:col-span-3 font-mono text-xs uppercase tracking-wider text-muted">
          <div>{project.period}</div>
          <div className="mt-1">{project.role}</div>
        </div>
        <div className="md:col-span-3 flex md:justify-end">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted flex items-center gap-2 group-hover:text-ink transition-colors">
            {open ? '— Close' : '+ Details'}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-1 md:col-start-2 hidden md:block" />
              <div className="md:col-span-5">
                <p className="text-base leading-relaxed mb-8">{project.summary}</p>

                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                  ⟶ Stack
                </div>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-xs px-3 py-1 border border-line rounded-full"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                  ⟶ Contributions
                </div>
                <ul className="space-y-2 text-sm">
                  {project.contributions.map((c, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent font-mono text-xs pt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.trouble && (
                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                    ⟶ Troubleshooting
                  </div>
                  <div className="space-y-5 border border-line p-6 md:p-8 bg-paper">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                        Problem
                      </div>
                      <p className="text-sm leading-relaxed">{project.trouble.problem}</p>
                    </div>
                    <div className="h-px bg-line" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                        Approach
                      </div>
                      <p className="text-sm leading-relaxed">{project.trouble.approach}</p>
                    </div>
                    <div className="h-px bg-line" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                        Result
                      </div>
                      <p className="text-sm leading-relaxed">{project.trouble.result}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
