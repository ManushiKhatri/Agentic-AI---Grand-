import React, { useState } from 'react'
export default function Chatbot() {
  const [input, setInput] = useState('')
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto mb-4">
        <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg">
          Hello! I'm your Grand MotorCars AI Assistant. How can I help you today?
        </div>
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about sales, inventory, reports..."
          className="flex-1 bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="bg-teal-600 hover:bg-teal-700 px-4 rounded-r-md text-white">
          →
        </button>
      </div>
    </div>
  )
}