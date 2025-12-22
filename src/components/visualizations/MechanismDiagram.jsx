'use client'

import { useState } from 'react'

/**
 * Three-Mechanism Conceptual Diagram
 *
 * Shows hypothesized relationships between complexity, warfare, religion and stability.
 * NOT a causal DAG - arrows represent correlational patterns from the model.
 */
export default function MechanismDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const mechanisms = {
    complexity: {
      label: 'Complexity',
      importance: '44%',
      color: '#60a5fa',
      description: 'Hierarchy, administration, infrastructure. Effect reverses across eras: destabilizing in Ancient, stabilizing in Early Modern.'
    },
    warfare: {
      label: 'Warfare',
      importance: '29%',
      color: '#f87171',
      description: 'Military technology, fortifications, cavalry. Moderates how complexity affects survival, especially in Classical era.'
    },
    religion: {
      label: 'Religion',
      importance: '27%',
      color: '#d4a574',
      description: 'Ideology, legitimacy, moralizing beliefs. Strongest individual features. Nonlinear effects.'
    }
  }

  return (
    <div className="mechanism-diagram">
      <svg viewBox="0 0 600 300" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'block' }}>

        {/* Arrow markers */}
        <defs>
          <marker id="arr-gray" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#4a4a4d" />
          </marker>
          <marker id="arr-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#60a5fa" />
          </marker>
          <marker id="arr-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f87171" />
          </marker>
          <marker id="arr-gold" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#d4a574" />
          </marker>
        </defs>

        {/* Era - top center */}
        <g>
          <rect x="225" y="15" width="150" height="32" rx="4" fill="#1a1a1d" stroke="#3a3a3d" strokeWidth="1" />
          <text x="300" y="36" textAnchor="middle" fill="#6a6a6d" fontSize="12" fontFamily="inherit">
            Era (moderates all)
          </text>
        </g>

        {/* Dashed lines from Era to mechanisms */}
        <line x1="260" y1="47" x2="140" y2="95" stroke="#3a3a3d" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arr-gray)" />
        <line x1="300" y1="47" x2="300" y2="95" stroke="#3a3a3d" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arr-gray)" />
        <line x1="340" y1="47" x2="460" y2="95" stroke="#3a3a3d" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arr-gray)" />

        {/* Three mechanism nodes */}
        {[
          { key: 'complexity', x: 100, y: 140 },
          { key: 'warfare', x: 300, y: 140 },
          { key: 'religion', x: 500, y: 140 }
        ].map(({ key, x, y }) => {
          const m = mechanisms[key]
          const isHovered = hoveredNode === key
          return (
            <g
              key={key}
              onMouseEnter={() => setHoveredNode(key)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={x} cy={y} r={40}
                fill="#0a0a0b"
                stroke={m.color}
                strokeWidth={isHovered ? 2.5 : 1.5}
                opacity={hoveredNode && !isHovered ? 0.4 : 1}
              />
              <text x={x} y={y - 8} textAnchor="middle" fill={m.color} fontSize="12" fontWeight="600">
                {m.label}
              </text>
              <text x={x} y={y + 10} textAnchor="middle" fill="#e8e6e3" fontSize="13" fontWeight="500">
                {m.importance}
              </text>
            </g>
          )
        })}

        {/* Interaction line between complexity and warfare */}
        <line x1="140" y1="140" x2="260" y2="140" stroke="#3a3a3d" strokeWidth="1" strokeDasharray="3,3" />
        <text x="200" y="132" textAnchor="middle" fill="#4a4a4d" fontSize="9">interacts</text>

        {/* Arrows to Stability */}
        <line x1="100" y1="180" x2="200" y2="240" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
        <line x1="300" y1="180" x2="300" y2="240" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#arr-red)" />
        <line x1="500" y1="180" x2="400" y2="240" stroke="#d4a574" strokeWidth="1.5" markerEnd="url(#arr-gold)" />

        {/* Stability outcome */}
        <g>
          <rect x="200" y="248" width="200" height="32" rx="4" fill="#1a1a1d" stroke="#2a2a2d" strokeWidth="1" />
          <text x="300" y="269" textAnchor="middle" fill="#e8e6e3" fontSize="12" fontFamily="inherit">
            Stability (duration)
          </text>
        </g>
      </svg>

      {/* Hover tooltip */}
      {hoveredNode && (
        <p style={{
          textAlign: 'center',
          marginTop: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          maxWidth: '500px',
          margin: '0.5rem auto 0'
        }}>
          <span style={{ color: mechanisms[hoveredNode].color, fontWeight: 600 }}>
            {mechanisms[hoveredNode].label}:
          </span>{' '}
          {mechanisms[hoveredNode].description}
        </p>
      )}

      {/* Caveat */}
      <p style={{
        fontSize: '0.7rem',
        color: 'var(--text-muted)',
        textAlign: 'center',
        marginTop: '0.75rem',
        fontStyle: 'italic',
        opacity: 0.7
      }}>
        Arrows show correlational patterns, not confirmed causal effects.
      </p>
    </div>
  )
}
