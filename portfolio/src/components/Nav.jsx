import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#demo', label: 'Demo' },
  { href: '#writings', label: 'Writings' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tightest">SW.</span>
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] hidden md:inline">
            Frontend Developer
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                <span className="text-muted mr-2">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <ul className="px-6 py-6 space-y-4 font-mono text-sm uppercase tracking-[0.18em]">
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-3">
                  <span className="text-muted text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
