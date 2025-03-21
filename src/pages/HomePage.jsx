import { Link } from "react-router";
import Header from "../components/Header";
import { useTest } from "../contexts/TestContext";
import banner from"../../public/banner.webp";
import React from "react"
import "../index.css"

const HomePage = () => {
  const { startTest } = useTest()

  const handleStartTest = () => {
    startTest()
  }

  return (
    <div className="min-h-screen relative flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-1">
        <div className="relative w-full h-[90vh] mb-12">
          <img
            src={banner}
            alt="Technical School Test Platform"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            {/* Content Container */}
            <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
               <span className="text-cyan-400">Texnikumga</span> kirish imtihoniga tayyorlaning
              </h1>
         
              <p className="text-lg md:text-xl text-white max-w-3xl mb-8">
              Tushunchalarni o'zlashtiring, haqiqiy imtihon savollari bilan mashq qiling va texnikumga kirish imtihonidan o'tish uchun ishonchingizni oshiring.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Link
                  to="/test"
                  className="foo bg-gradient-to-r text-[50px] from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-200/50"
                  onClick={handleStartTest}
                >
                  Start Test
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">Amaliy testlar</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">Batafsil tushuntirishlar</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">Ishlash tahlili</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content */}
        <div className="container mx-auto px-4">
          {/* Test Structure Section */}
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-blue-100 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">2023-2024-o'quv yili Test Strukturasi</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">
                  Barcha test topshiruvchilar uchun majburiy fanlar:
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Ona tili (o'zbek, rus yoki qoraqalpoq tili)</p>
                      <p className="text-gray-600 text-sm">10 ta savol. Har biri uchun 1.1 balldan.</p>
                      <p className="text-blue-600 font-medium">Maksimal ball – 11 ball</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-semibold text-blue-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Matematika</p>
                      <p className="text-gray-600 text-sm">10 ta savol. Har biri uchun 1.1 balldan.</p>
                      <p className="text-blue-600 font-medium">Maksimal ball – 11 ball</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-semibold text-blue-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium">O'zbekiston tarixi</p>
                      <p className="text-gray-600 text-sm">10 ta savol. Har biri uchun 1.1 balldan.</p>
                      <p className="text-blue-600 font-medium">Maksimal ball – 11 ball</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mt-4">
                  <p className="font-medium text-blue-800">Jami to'plash mumkin bo'lgan ball – 33 ball</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">Kasb va mutaxassisligiga mos fanlar:</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-semibold text-cyan-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium">1-fan</p>
                      <p className="text-gray-600 text-sm">30 ta savol. Har biri uchun 3.1 balldan.</p>
                      <p className="text-cyan-600 font-medium">Maksimal ball – 93 ball</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-semibold text-cyan-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium">2-fan</p>
                      <p className="text-gray-600 text-sm">30 ta savol. Har biri uchun 2.1 balldan.</p>
                      <p className="text-cyan-600 font-medium">Maksimal ball – 63 ball</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-3 rounded-lg mt-4">
                  <p className="font-medium text-cyan-800">Jami to'plash mumkin bo'lgan ball – 156 ball</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-lg text-center">
              <p className="text-white font-bold text-lg">5 ta fan bo'yicha maksimal ball 189</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex  justify-center">
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
              <span className="text-sm font-medium ">Texnikum © {new Date().getFullYear()}</span>
            </div>

          
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

