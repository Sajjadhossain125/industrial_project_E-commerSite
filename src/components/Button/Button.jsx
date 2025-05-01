import React from 'react'

export default function Button({children}) {
  return (
    <div>
        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          {children}
          </button>
    </div>
  )
}
