'use client'

import { useState } from 'react'

export default function EmailSignup() {
  // Declare state variables
  const [email, setEmail] = useState('')        // Input value
  const [status, setStatus] = useState('idle')  // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  // Event Handlers
  // Functions that run when user interacts with the UI
  // In React, they're passed as props: onClick={handleClick}
  
  const handleSubmit = async (e) => {
    e.preventDefault()  // Prevent default form submission
    setStatus('loading')
    
    try {
      // In my real app, submit to your API or Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setStatus('success')
        setMessage('Thanks! I\'ll notify you when everything is launched.')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  // Conditional Rendering
  // Render different UI based on state
  
  if (status === 'success') {
    return (
      <section className="cta-section">
        <p className="text-accent">{message}</p>
      </section>
    )
  }

  return (
    <section className="cta-section">
      <p>
        The full interactive experience launches soon.
        <br />
        Enter your email to be notified.
      </p>
      
      <form className="email-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="email-input" 
          placeholder="your@email.com"
          value={email}  // Controlled input - React manages the value
          onChange={(e) => setEmail(e.target.value)}  // Update state on change
          required 
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Notify Me'}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="error-message">{message}</p>
      )}
    </section>
  )
}