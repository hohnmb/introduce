import { motion } from 'framer-motion'

export default function SectionHeader({ index, label, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-20"
    >
      <div className="flex items-center gap-4 mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <span>({index})</span>
        <span className="flex-1 h-px bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-5xl md:text-7xl tracking-tightest leading-[0.95]">
        {title}
      </h2>
      {sub && <p className="mt-4 md:mt-6 text-muted max-w-2xl text-base md:text-lg">{sub}</p>}
    </motion.div>
  )
}
