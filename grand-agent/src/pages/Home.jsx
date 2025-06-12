import Chatbot from 'c:/Users/manus/OneDrive - Howard University/Documents/AI Agent/Agentic-AI---Grand-/grand-agent/src/Components/Chatbot.jsx'

export default function Home() {
  return (
    <div className="h-full p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Grand MotorCars AI Agent</h1>
      <div className="flex-1 border rounded overflow-hidden">
        <Chatbot />
      </div>
      {/* Below this you could render charts/table when the bot “pushes” results */}
    </div>
  )
}
