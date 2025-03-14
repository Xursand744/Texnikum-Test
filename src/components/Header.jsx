"use client"

import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { useAuth } from "../App"

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { login } = useAuth()
  const isTestActive = location.pathname === "/test"
  const [password, setPassword] = useState("")
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const handleAdminLogin = () => {
    if (password === "admin123") {
      setLoginError(false)
      setShowLoginModal(false)

      login()

      navigate("/admin")
    } else {
      setLoginError(true)
    }
  }

  return (
    <>
      <header className="shadow-sm border-b border-blue-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Texnikum
            </span>
          </Link>

          {!isTestActive && (
            <nav className="flex gap-6 items-center">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <button
                onClick={() => {
                  setPassword("")
                  setLoginError(false)
                  setShowLoginModal(true)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Admin
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Admin Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-md">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
              <h3 className="text-xl font-bold">Admin Login</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <p className="mb-4">Administrator paneliga kirish uchun administrator hisob ma’lumotlarini kiriting:</p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="admin-username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      id="admin-username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="admin"
                      defaultValue="admin"
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="admin-password"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        loginError ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (loginError) setLoginError(false)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleAdminLogin()
                      }}
                      autoFocus
                    />
                    {loginError && <p className="mt-1 text-sm text-red-600">Noto'g'ri parol. Iltimos, qayta urinib koʻring.</p>}
                  </div>
                </div>

                {/* Hint for demo purposes */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">Maslahat:</span> Ushbu demo uchun parol"admin123"
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdminLogin}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

