import React, { useState } from 'react'

function handleSubmit(e) {
  e.preventDefault()
  console.log('test')
}

export function ContactForm() {
  const [input, setInput] = useState({})

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Name:</label>
      <input
        id="text"
        type="text"
        value={input.text}
        aria-label="Text input"
        onChange={e => setInput({ text: e.target.value })}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={input.email}
        aria-label="Email input"
        onChange={e => setInput({ email: e.target.value })}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={input.message}
        aria-label="Message input"
        onChange={e => setInput({ message: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  )
}
