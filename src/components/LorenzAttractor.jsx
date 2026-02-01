'use client'

import { useEffect, useRef, useState } from 'react'

const SIGMA = 10
const RHO = 28
const BETA = 8 / 3
const NUM_PARTICLES = 600
const DT = 0.005

export default function LorenzAttractor() {
  const canvasRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId

    const particles = []
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: 0.1 + (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: Math.random() * 5,
      })
    }

    let minX = Infinity, maxX = -Infinity
    let minY = Infinity, maxY = -Infinity
    let bx = 0.1, by = 0, bz = 0
    for (let i = 0; i < 15000; i++) {
      bx += SIGMA * (by - bx) * DT
      by += (bx * (RHO - bz) - by) * DT
      bz += (bx * by - BETA * bz) * DT
      if (bx < minX) minX = bx
      if (bx > maxX) maxX = bx
      if (by < minY) minY = by
      if (by > maxY) maxY = by
    }

    const rangeX = maxX - minX
    const rangeY = maxY - minY
    const midX = (minX + maxX) / 2
    const midY = (minY + maxY) / 2

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#0a0a0b'
      ctx.fillRect(0, 0, rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      const pad = 0.1
      const scale = Math.min(
        w * (1 - 2 * pad) / rangeX,
        h * (1 - 2 * pad) / rangeY
      )
      const cx = w / 2
      const cy = h / 2

      ctx.fillStyle = 'rgba(10, 10, 11, 0.12)'
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i]

        p.x += SIGMA * (p.y - p.x) * DT
        p.y += (p.x * (RHO - p.z) - p.y) * DT
        p.z += (p.x * p.y - BETA * p.z) * DT

        const screenX = cx + (p.x - midX) * scale
        const screenY = cy - (p.y - midY) * scale

        const size = 1.5
        const alpha = 0.55 + Math.random() * 0.35
        ctx.fillStyle = `rgba(201, 165, 92, ${alpha})`
        ctx.fillRect(screenX - size / 2, screenY - size / 2, size, size)
      }

      animId = requestAnimationFrame(draw)
    }

    canvas.style.opacity = '0'
    canvas.style.transition = 'opacity 1.5s ease-out'
    requestAnimationFrame(() => { canvas.style.opacity = '1' })

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      <span
        style={{
          position: 'absolute',
          bottom: '-1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          opacity: hovered ? 0.7 : 0,
          transition: 'opacity 0.4s ease',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        Lorenz Attractor
      </span>
    </div>
  )
}
