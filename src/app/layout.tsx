import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ccntainer">
            {children}
        </div>
      </body>
    </html>
  )
}
