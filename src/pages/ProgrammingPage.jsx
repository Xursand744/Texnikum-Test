import { Link } from "react-router"
import Header from "../components/Header"

const ProgrammingPage = () => {
  const questions = [
    "Dasturlash tillari klassifikatsiyasini tushuntirib bering",
    "Obyektga yo'naltirilgan dasturlash paradigmasini tushuntirib bering",
    "Funksional dasturlash paradigmasini tushuntirib bering",
    "Protsedurali dasturlash paradigmasini tushuntirib bering",
    "Dasturlash tillarida ma'lumotlar turlari haqida gapirib bering",
    "Dasturlash tillarida o'zgaruvchilar va konstantalar haqida gapirib bering",
    "Dasturlash tillarida operatorlar va ularning turlari haqida gapirib bering",
    "Dasturlash tillarida shart operatorlari haqida gapirib bering",
    "Dasturlash tillarida takrorlash operatorlari haqida gapirib bering",
    "Dasturlash tillarida massivlar haqida gapirib bering",
    "Dasturlash tillarida funksiyalar haqida gapirib bering",
    "Dasturlash tillarida rekursiya haqida gapirib bering",
    "Dasturlash tillarida obyektlar haqida gapirib bering",
    "Dasturlash tillarida klasslar haqida gapirib bering",
    "Dasturlash tillarida vorislik haqida gapirib bering",
    "Dasturlash tillarida polimorfizm haqida gapirib bering",
    "Dasturlash tillarida inkapsulyatsiya haqida gapirib bering",
    "Dasturlash tillarida abstraksiya haqida gapirib bering",
    "Dasturlash tillarida interfeyslar haqida gapirib bering",
    "Dasturlash tillarida xatoliklarni qayta ishlash haqida gapirib bering",
    "Dasturlash tillarida fayllar bilan ishlash haqida gapirib bering",
    "Dasturlash tillarida ma'lumotlar bazasi bilan ishlash haqida gapirib bering",
    "Dasturlash tillarida tarmoq bilan ishlash haqida gapirib bering",
    "Dasturlash tillarida grafik interfeys yaratish haqida gapirib bering",
    "Dasturlash tillarida multithreading haqida gapirib bering",
    "Dasturlash tillarida sinxron va asinxron dasturlash haqida gapirib bering",
    "Dasturlash tillarida algoritmlar va ma'lumotlar strukturasi haqida gapirib bering",
    "Dasturlash tillarida Big O notatsiyasi haqida gapirib bering",
    "Dasturlash tillarida saralash algoritmlari haqida gapirib bering",
    "Dasturlash tillarida qidiruv algoritmlari haqida gapirib bering",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-blue-50 p-6 mb-8">
            <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Dasturlash bo'yicha savollar
            </h1>

            <div className="space-y-4 mt-8">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <p className="text-gray-800">{question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="bg-white text-blue-600 border border-blue-200 font-semibold py-3 px-6 rounded-full shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-8 h-8 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
              <span className="text-sm font-medium">Texnikum © {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProgrammingPage

