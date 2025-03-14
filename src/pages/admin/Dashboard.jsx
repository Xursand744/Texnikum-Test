import { Link } from "react-router"
import { useTest } from "../../contexts/TestContext"

const Dashboard = () => {
  const { questions } = useTest()

  // Mock data for the dashboard
  const stats = [
    {
      label: "Jami savollar",
      value: questions.length,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      label: "Active Tests",
      value: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      label: "Total Users",
      value: 128,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      label: "Avg. Score",
      value: "76%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "bg-yellow-500",
    },
  ]

  // Mock recent activity data
  const recentActivity = [
    { id: 1, user: "Erkin", action: "Tugallangan test", score: "85%", time: "2 soat oldin" },
    { id: 2, user: "Madiyor", action: "Tugallangan test", score: "92%", time: "3 soat oldin" },
    { id: 3, user: "Kamol", action: "Tugallangan test", score: "78%", time: "5 soat oldin" },
    { id: 4, user: "Sardor", action: "Tugallangan test", score: "64%", time: "6 soat oldin" },
    { id: 5, user: "Bekzod", action: "Tugallangan test", score: "71%", time: "8 soat oldin" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} rounded-lg p-3 text-white`}>{stat.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Testni yakunlash darajasi</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-50 rounded-md text-blue-600 text-sm">Haftalik</button>
              <button className="px-3 py-1 bg-gray-100 rounded-md text-gray-600 text-sm">Oylik</button>
              <button className="px-3 py-1 bg-gray-100 rounded-md text-gray-600 text-sm">Yillik</button>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Diagramma to'ldiruvchisi - vaqt o'tishi bilan testni yakunlash tezligini ko'rsatadi</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-6">Savol toifalari</h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Programming</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Tarmoqqa ulanish</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Database</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Xavfsizlik</span>
                <span className="text-sm font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Oxirgi faoliyat</h2>
          <Link to="#" className="text-blue-600 text-sm hover:underline">
            View all
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Action</th>
                <th className="pb-3 font-medium">Score</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-50 text-sm">
                  <td className="py-3">{activity.user}</td>
                  <td className="py-3">{activity.action}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        Number.parseInt(activity.score) >= 80
                          ? "bg-green-100 text-green-800"
                          : Number.parseInt(activity.score) >= 70
                            ? "bg-blue-100 text-blue-800"
                            : Number.parseInt(activity.score) >= 60
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {activity.score}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Oxirgi faoliyat</h2>

          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/admin/questions/new"
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">Savol qo'shish</span>
            </Link>

            <Link
              to="/admin/questions"
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mb-2"
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
              <span className="text-sm font-medium">Savollarni boshqarish</span>
            </Link>

            <Link
              to="#"
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm font-medium">Foydalanuvchilarni boshqarish</span>
            </Link>

            <Link
              to="#"
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <span className="text-sm font-medium">Hisobotlarni ko'rish</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Tizim holati</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Sinov dvigateli</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Operational</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>User Authentication</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Operational</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Analytics</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Operational</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Reporting</span>
              </div>
              <span className="text-yellow-600 text-sm font-medium">Partial Outage</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Database</span>
              </div>
              <span className="text-green-600 text-sm font-medium">Operational</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Last updated: 5 minutes ago</span>
              <button className="text-blue-600 text-sm hover:underline">Refresh</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

