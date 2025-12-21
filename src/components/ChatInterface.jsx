'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const containerStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    maxWidth: '700px',
    margin: '0 auto'
  }

  const messagesContainerStyle = {
    flex: 1,
    overflowY: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }

  const messageBaseStyle = {
    maxWidth: '80%',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    lineHeight: '1.5',
    fontSize: '0.95rem'
  }

  const userMessageStyle = {
    ...messageBaseStyle,
    background: 'var(--accent-dim)',
    color: 'var(--text-primary)',
    alignSelf: 'flex-end',
    borderBottomRightRadius: '2px'
  }

  const assistantMessageStyle = {
    ...messageBaseStyle,
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: '2px'
  }

  const inputContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem',
    borderTop: '1px solid var(--border)'
  }

  const inputStyle = {
    flex: 1,
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none'
  }

  const buttonStyle = {
    background: 'var(--accent)',
    color: 'var(--bg-primary)',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-jetbrains), monospace',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    opacity: isLoading ? 0.7 : 1,
    transition: 'opacity 0.2s'
  }

  const loadingStyle = {
    color: 'var(--text-muted)',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    padding: '0.5rem 1rem'
  }

  const emptyStateStyle = {
    color: 'var(--text-muted)',
    textAlign: 'center',
    padding: '3rem 1rem',
    fontSize: '0.95rem'
  }

  const errorStyle = {
    color: '#ef4444',
    fontSize: '0.85rem',
    padding: '0.5rem 1rem'
  }

  return (
    <div style={containerStyle}>
      <div style={messagesContainerStyle}>
        {messages.length === 0 && (
          <div style={emptyStateStyle}>
            Try asking about the Roman Empire, Han Dynasty, or any historical polity...
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            style={msg.role === 'user' ? userMessageStyle : assistantMessageStyle}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div style={loadingStyle}>Thinking...</div>
        )}
        {error && (
          <div style={errorStyle}>Error: {error}</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} style={inputContainerStyle}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about civilizational patterns..."
          style={inputStyle}
          disabled={isLoading}
        />
        <button type="submit" style={buttonStyle} disabled={isLoading}>
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  )
}
