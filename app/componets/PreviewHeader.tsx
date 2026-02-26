import Link from 'next/link'
import React from 'react'

const PreviewHeader = () => {
  return (
    <>
     <header className="border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">TradeFlow</span>
          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
            Preview Mode
          </span>
        </div>

        <div className="flex gap-4">
          <Link href="/login" className="text-sm text-gray-300 hover:text-white">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-indigo-600 px-4 py-2 rounded-md text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
    </>
  )
}

export default PreviewHeader