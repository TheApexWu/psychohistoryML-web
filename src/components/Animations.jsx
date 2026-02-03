'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Animations() {
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll('.scroll-fade-in:not(.scrolled)')
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top
        const trigger = window.innerHeight * 0.8
        if (top < trigger) {
          el.classList.add('scrolled')
        }
      })
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}
