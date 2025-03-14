"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { useTest } from "../../contexts/TestContext"

const EditQuestion = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { questions, addQuestion, updateQuestion } = useTest()

  const isNewQuestion = id === undefined

  const emptyQuestion = {
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
    explanation: "",
  }

  const [formData, setFormData] = useState(emptyQuestion)

  useEffect(() => {
    if (!isNewQuestion) {
      const questionToEdit = questions.find((q) => q.id === Number.parseInt(id))
      if (questionToEdit) {
        setFormData(questionToEdit)
      } else {
        navigate("/admin/questions")
      }
    }
  }, [id, questions, isNewQuestion, navigate])

  const handleQuestionChange = (e) => {
    setFormData({
      ...formData,
      question: e.target.value,
    })
  }

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options]
    newOptions[index] = value
    setFormData({
      ...formData,
      options: newOptions,
    })
  }

  const handleCorrectAnswerChange = (index) => {
    setFormData({
      ...formData,
      correctAnswer: index,
    })
  }

  const handleExplanationChange = (e) => {
    setFormData({
      ...formData,
      explanation: e.target.value,
    })
  }

  const handleAddOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, ""],
    })
  }

  const handleRemoveOption = (index) => {
    const newOptions = formData.options.filter((_, i) => i !== index)

    // Adjust correctAnswer if needed
    let newCorrectAnswer = formData.correctAnswer
    if (index === formData.correctAnswer) {
      newCorrectAnswer = 0
    } else if (index < formData.correctAnswer) {
      newCorrectAnswer = formData.correctAnswer - 1
    }

    setFormData({
      ...formData,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.question.trim()) {
      alert("Please enter a question")
      return
    }

    if (formData.options.some((option) => !option.trim())) {
      alert("Please fill in all options")
      return
    }

    if (isNewQuestion) {
      addQuestion(formData)
    } else {
      updateQuestion(formData)
    }

    navigate("/admin/questions")
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{isNewQuestion ? "Add New Question" : "Edit Question"}</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
              Savollar
            </label>
            <textarea
              id="question"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your question here..."
              value={formData.question}
              onChange={handleQuestionChange}
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Options</label>
              <button
                type="button"
                onClick={handleAddOption}
                className="text-blue-600 text-sm hover:underline flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Option
              </button>
            </div>

            <div className="space-y-3">
              {formData.options.map((option, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex items-center h-10 mt-1">
                    <input
                      type="radio"
                      id={`correct-${index}`}
                      name="correctAnswer"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      checked={formData.correctAnswer === index}
                      onChange={() => handleCorrectAnswerChange(index)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                      />
                      {formData.options.length > 2 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveOption(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Remove option"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className="mt-1 ml-2 text-sm text-gray-500">
                      {formData.correctAnswer === index && (
                        <span className="text-green-600 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Correct answer
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="explanation" className="block text-sm font-medium text-gray-700 mb-1">
              Explanation (shown after answering)
            </label>
            <textarea
              id="explanation"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain why the correct answer is right..."
              value={formData.explanation}
              onChange={handleExplanationChange}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/questions")}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {isNewQuestion ? "Create Question" : "Update Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditQuestion

