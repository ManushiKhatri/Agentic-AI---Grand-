import React from 'react'
import PageCard from '../components/PageCard.jsx'
import Chatbot from '../components/Chatbot.jsx'
export default function Home() {
  return (
    <PageCard title="Grand MotorCars AI Agent">
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-4">
          <Chatbot />
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <p className="text-gray-500 italic">Ask a query above to render charts & tables</p>
        </div>
      </div>
    </PageCard>
  )
}