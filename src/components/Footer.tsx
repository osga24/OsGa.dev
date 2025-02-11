import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="max-w-4xl mx-auto px-6 md:px-10 py-8 mt-8 border-t border-gray-500">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OsGa. All Rights Reserved.
        </p>
      </footer>
	</div>
  )
}
