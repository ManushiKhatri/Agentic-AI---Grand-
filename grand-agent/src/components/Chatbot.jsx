import { useState } from 'react'

export default function Chatbot() {
  const [q, setQ] = useState('')

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-auto">
        <div className="inline-block bg-teal-600 text-white p-3 rounded-lg">
          Hello, I am Grand Agent. How can I help you today?
        </div>
        {/* TODO: render history of questions/answers here */}
      </div>
      <div className="flex border-t p-2">
        <input
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Type your question..."
        />
        <button
          onClick={() => {
            /* TODO: call your LLM & append to history */
            setQ('')
          }}
          className="bg-teal-600 text-white px-4 rounded-r"
        >
          🔍
        </button>
      </div>
    </div>
  )
}
