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

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] uppercase tracking-[0.25em] border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>

              {project.troubles && project.troubles.length > 0 && (
                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                    ⟶ Troubleshooting
                  </div>
                  <div className="space-y-6">
                    {project.troubles.map((t, i) => (
                      <div key={i} className="space-y-5 border border-line p-6 md:p-8 bg-paper">
                        {project.troubles.length > 1 && (
                          <div className="font-mono text-[10px] uppercase tracking-wider text-muted mb-2">
                            Case {String(i + 1).padStart(2, '0')}
                          </div>
                        )}
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                            Problem
                          </div>
                          <p className="text-sm leading-relaxed">{t.problem}</p>
                        </div>
                        <div className="h-px bg-line" />
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                            Approach
                          </div>
                          <p className="text-sm leading-relaxed">{t.approach}</p>
                        </div>
                        <div className="h-px bg-line" />
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                            Result
                          </div>
                          <p className="text-sm leading-relaxed">{t.result}</p>
                        </div>
                      </div>
                    ))}
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
