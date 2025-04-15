"use client"

import { useEffect } from "react"
import { Link, useNavigate } from "react-router"
import { useUser } from "../contexts/UserContext"
import Header from "../components/Header"

const ProfilePage = () => {
  const navigate = useNavigate()
  const { user, logout, testHistory, isLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login")
    }
  }, [user, isLoading, navigate])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-blue-50 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Profil
              </h1>

              <button
                onClick={logout}
                className="mt-4 md:mt-0 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 3a1 1 0 10-2 0v6.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L14 12.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Chiqish
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Shaxsiy ma'lumotlar</h2>

                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">To'liq ism</span>
                    <span className="font-medium">{user.fullName}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="font-medium">{user.email}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Telefon raqami</span>
                    <span className="font-medium">{user.phoneNumber}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Hudud</span>
                    <span className="font-medium">{user.region}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Test natijalaringiz</h2>

                  <Link to="/test-categories" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Yangi test boshlash
                  </Link>
                </div>

                {testHistory.length > 0 ? (
                  <div className="space-y-3">
                    {testHistory.map((result, index) => (
                      <div
                        key={result.id}
                        className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Test #{testHistory.length - index}</h3>
                            <p className="text-sm text-gray-500">{formatDate(result.date)}</p>
                          </div>
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                            {result.total}/33 ball
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                          <div className="bg-green-50 p-2 rounded-lg">
                            <p className="text-gray-600">Ona tili</p>
                            <p className="font-medium text-green-700">{result.categoryScores.nativeLanguage}/11</p>
                          </div>
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <p className="text-gray-600">Matematika</p>
                            <p className="font-medium text-blue-700">{result.categoryScores.mathematics}/11</p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <p className="text-gray-600">Tarix</p>
                            <p className="font-medium text-purple-700">{result.categoryScores.history}/11</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-gray-400 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <p className="text-gray-600">Siz hali hech qanday test topshirmadingiz</p>
                    <Link
                      to="/test-categories"
                      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Test topshirish
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
