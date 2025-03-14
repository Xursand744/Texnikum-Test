
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useTest } from "../contexts/TestContext"

const TestPage = () => {
  const navigate = useNavigate()
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    userAnswers,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    testCompleted,
    testStarted,
  } = useTest()

  const [selectedOption, setSelectedOption] = useState(null)
  const [timeLeft, setTimeLeft] = useState(30 * 60)

  // Redirect if test not started
  useEffect(() => {
    if (!testStarted) {
      navigate("/")
    }
  }, [testStarted, navigate])

  // Redirect to results when test is completed
  useEffect(() => {
    if (testCompleted) {
      navigate("/results")
    }
  }, [testCompleted, navigate])

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Set selected option from saved answers when question changes
  useEffect(() => {
    if (currentQuestion) {
      setSelectedOption(userAnswers[currentQuestion.id] !== undefined ? userAnswers[currentQuestion.id] : null)
    }
  }, [currentQuestion, userAnswers])

  if (!currentQuestion) return null

  const handleOptionSelect = (index) => {
    setSelectedOption(index)
    answerQuestion(currentQuestion.id, index)
  }

  const handleNext = () => {
    nextQuestion()
  }

  const handlePrevious = () => {
    previousQuestion()
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="bg-white shadow-sm border-b border-blue-50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
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
                Texnikum Test
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
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
                <span className="font-medium text-blue-800">{formatTime(timeLeft)}</span>
              </div>

              <div className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
          </div>

          <div className="mt-4 w-full bg-gray-100 rounded-full h-2">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="question-card mb-6">
            <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>

            <div className="space-y-3 mt-6">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`option-card ${selectedOption === index ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        selectedOption === index ? "bg-blue-500 border-blue-500 text-white" : "border-gray-300"
                      }`}
                    >
                      {selectedOption === index ? (
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
                        <span className="text-sm">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                currentQuestionIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>

            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              {currentQuestionIndex === questions.length - 1 ? "Finish Test" : "Next"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TestPage

