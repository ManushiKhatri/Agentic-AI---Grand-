import React from 'react'
export default function PageCard({ title, filters, onExport, children }) {
  return (
    <div className="flex flex-1 overflow-auto p-6">
      <div className="bg-gray-900 rounded-2xl shadow-lg flex-1 flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <div className="flex items-center space-x-4">
            {filters}
            {onExport && (
              <button
                onClick={onExport}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Export
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-auto px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  )
}