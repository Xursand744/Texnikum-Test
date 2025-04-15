"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { useTest } from "../contexts/TestContext"
import { useUser } from "../contexts/UserContext"
import confetti from "canvas-confetti"

const ResultsPage = () => {
  const navigate = useNavigate()
  const { calculateTotalScore, questions, userAnswers, startTest, testCompleted } = useTest()
  const { saveTestResult } = useUser()

  const [calculatedScores, setCalculatedScores] = useState(null)

  useEffect(() => {
    if (!testCompleted) {
      navigate("/test-categories")
      return
    }

    // Calculate scores once and save test results
    const results = calculateTotalScore()

    // Update category scores in state
    setCalculatedScores(results)

    // Save test results
    saveTestResult(results)

    // Show confetti for good results
    if (results.percentage >= 70) {
      const duration = 3 * 1000
      const end = Date.now() + duration

      const colors = ["#0070f3", "#00c2ff", "#00e5ff"]
      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
    }
  }, [testCompleted, calculateTotalScore, navigate, saveTestResult])

  if (!testCompleted) return null

  const { categoryScores, total, percentage } = calculatedScores || { categoryScores: {}, total: 0, percentage: 0 }

  // Determine result message based on score
  const getResultMessage = () => {
    if (percentage >= 90) return "Ajoyib! Siz imtihonga yaxshi tayyorgarlik ko'rgansiz."
    if (percentage >= 70) return "Yaxshi bajarilgan ish! Siz to'g'ri yo'ldasiz."
    if (percentage >= 50) return "Siz muvaffaqiyatga erishyapsiz, lekin ko'proq mashq qilishingiz kerak."
    return "Sizga ko'proq tayyorgarlik kerak. O'qishda davom eting!"
  }

  // Get appropriate emoji based on score
  const getResultEmoji = () => {
    if (percentage >= 90) return "🏆"
    if (percentage >= 70) return "🎉"
    if (percentage >= 50) return "👍"
    return "📚"
  }

  // Get color based on score
  const getScoreColor = () => {
    if (percentage >= 90) return "text-green-500"
    if (percentage >= 70) return "text-blue-500"
    if (percentage >= 50) return "text-yellow-500"
    return "text-red-500"
  }

  const handleRetryTest = () => {
    startTest()
    navigate("/test-categories")
  }

  // Group questions by category
  const questionsByCategory = {
    nativeLanguage: questions.filter((q) => q.category === "nativeLanguage"),
    mathematics: questions.filter((q) => q.category === "mathematics"),
    history: questions.filter((q) => q.category === "history"),
  }

  // Get category name
  const getCategoryName = (category) => {
    switch (category) {
      case "nativeLanguage":
        return "Ona tili"
      case "mathematics":
        return "Matematika"
      case "history":
        return "O'zbekiston tarixi"
      default:
        return category
    }
  }

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "nativeLanguage":
        return "bg-green-100 text-green-800"
      case "mathematics":
        return "bg-blue-100 text-blue-800"
      case "history":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="bg-white shadow-sm border-b border-blue-50">
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
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="futuristic-card p-8 text-center mb-8 celebration-animation">
            <div className="text-6xl mb-4">{getResultEmoji()}</div>
            <h1 className="text-3xl font-bold mb-2">Test Natijasi!</h1>
            <p className="text-gray-600 mb-6">{getResultMessage()}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-800">Ona tili</h3>
                <p className="text-2xl font-bold text-green-600">{categoryScores.nativeLanguage}/11</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-blue-800">Matematika</h3>
                <p className="text-2xl font-bold text-blue-600">{categoryScores.mathematics}/11</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-medium text-purple-800">Tarix</h3>
                <p className="text-2xl font-bold text-purple-600">{categoryScores.history}/11</p>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-blue-50 mb-6">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor()}`}>{total}/33</div>
                <div className="text-gray-500 mt-1">Umumiy ball</div>
              </div>
            </div>

            <div className="text-lg">
              Siz <span className="font-semibold">{percentage}%</span> natijaga erishdingiz
            </div>
          </div>

          {/* Results by category */}
          {Object.keys(questionsByCategory).map((category) => (
            <div key={category} className="futuristic-card p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className={`px-3 py-1 rounded-full text-sm mr-3 ${getCategoryColor(category)}`}>
                  {getCategoryName(category)}
                </span>
                <span>{categoryScores[category]}/11 ball</span>
              </h2>

              <div className="space-y-4">
                {questionsByCategory[category].map((question, index) => {
                  const userAnswer = userAnswers[question.id]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <div key={question.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                            isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {isCorrect ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            Savol {index + 1}: {question.question}
                          </p>
                          <div className="mt-2 text-sm">
                            <p className="text-gray-600">
                              Javobingiz:{" "}
                              <span className={isCorrect ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                {userAnswer !== undefined ? question.options[userAnswer] : "Javob berilmagan"}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-gray-600 mt-1">
                                To'g'ri javob:{" "}
                                <span className="text-green-600 font-medium">
                                  {question.options[question.correctAnswer]}
                                </span>
                              </p>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm mt-2">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleRetryTest} className="futuristic-button">
              Qayta test topshirish
            </button>

            <Link
              to="/profile"
              className="bg-white text-blue-600 border border-blue-200 font-semibold py-3 px-6 rounded-full shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Profilga o'tish
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResultsPage
