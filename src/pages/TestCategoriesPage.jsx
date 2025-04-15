
import { useNavigate } from "react-router"
import { useTest } from "../contexts/TestContext"
import Header from "../components/Header"

const TestCategoriesPage = () => {
  const navigate = useNavigate()
  const { startTest } = useTest()

  const categories = [
    {
      id: "nativeLanguage",
      title: "Ona tili",
      description: "Grammatika, so'z boyligi va til qoidalari bo'yicha 10 ta savol",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "bg-green-100 text-green-700",
      hoverColor: "hover:bg-green-50",
      borderColor: "hover:border-green-200",
    },
    {
      id: "mathematics",
      title: "Matematika",
      description: "Arifmetika, algebra va geometriya bo'yicha 10 ta savol",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-blue-100 text-blue-700",
      hoverColor: "hover:bg-blue-50",
      borderColor: "hover:border-blue-200",
    },
    {
      id: "history",
      title: "O'zbekiston tarixi",
      description: "O'zbekiston tarixi bo'yicha 10 ta savol",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-purple-100 text-purple-700",
      hoverColor: "hover:bg-purple-50",
      borderColor: "hover:border-purple-200",
    },
    {
      id: "all",
      title: "To'liq test",
      description: "Barcha fanlardan 30 ta savol (har bir fan bo'yicha 10 tadan)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "bg-gradient-to-r from-blue-500 to-cyan-400 text-white",
      hoverColor: "hover:from-blue-600 hover:to-cyan-500",
      borderColor: "border-transparent",
    },
  ]

  const handleStartTest = (categoryId) => {
    const category = categoryId === "all" ? null : categoryId
    startTest(category)
    navigate("/test")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-blue-50 p-6 mb-8">
            <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Test yo'nalishini tanlang
            </h1>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`border border-gray-100 rounded-xl p-6 cursor-pointer transition-all ${category.hoverColor} ${category.borderColor}`}
                  onClick={() => handleStartTest(category.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>{category.icon}</div>

                    <div>
                      <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>

                      <button
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleStartTest(category.id)
                        }}
                      >
                        Testni boshlash
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Test haqida ma'lumot</h4>
                  <p className="text-sm text-blue-700">
                    Har bir fan bo'yicha 10 ta savol mavjud. Har bir to'g'ri javob uchun 1.1 ball beriladi. Har bir fan
                    bo'yicha maksimal ball - 11 ball. Umumiy maksimal ball - 33 ball.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TestCategoriesPage
