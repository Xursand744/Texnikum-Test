"use client"

import { useState } from "react"
import { Link } from "react-router"
import { useTest } from "../../contexts/TestContext"

const QuestionsManager = () => {
  const { questions, deleteQuestion } = useTest()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredQuestions = questions.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      deleteQuestion(id)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Questions Manager</h1>
        <Link
          to="/admin/questions/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Question
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <select className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white">
            <option value="">All Categories</option>
            <option value="programming">Programming</option>
            <option value="networking">Networking</option>
            <option value="database">Database</option>
            <option value="security">Security</option>
          </select>

          <select className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white">
            <option value="">All Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Question</th>
                <th className="pb-3 font-medium">Options</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map((question) => (
                <tr key={question.id} className="border-b border-gray-50">
                  <td className="py-4 pr-4">{question.id}</td>
                  <td className="py-4 pr-4">
                    <div className="font-medium">{question.question}</div>
                  </td>
                  <td className="py-4 pr-4">
                    <div className="text-sm text-gray-500">{question.options.length} options</div>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/questions/edit/${question.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Edit"
                      >
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
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </Link>

                      <button
                        onClick={() => handleDelete(question.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No questions found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {filteredQuestions.length} of {questions.length} questions
        </div>

        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">1</button>
          <button className="px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionsManager

