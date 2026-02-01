'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Animations() {
  const overlayRef = useRef(null)
  const pathname = usePathname()
  const prevPathname = useRef(pathname)

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

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      const overlay = overlayRef.current
      if (overlay) {
        overlay.classList.remove('active')
        void overlay.offsetWidth
        overlay.classList.add('active')
        setTimeout(() => overlay.classList.remove('active'), 900)
      }
      prevPathname.current = pathname

      setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-fade-in:not(.scrolled)')
        elements.forEach((el) => {
          const top = el.getBoundingClientRect().top
          if (top < window.innerHeight * 0.8) {
            el.classList.add('scrolled')
          }
        })
      }, 100)
    }
  }, [pathname])

  return (
    <div className="transition-overlay" ref={overlayRef} />
  )
}
