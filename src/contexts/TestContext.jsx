"use client"

import { createContext, useState, useContext } from "react"

// Sample test questions for each category
const nativeLanguageQuestions = [
  {
    id: "nl1",
    category: "nativeLanguage",
    question: "Qaysi so'z to'g'ri yozilgan?",
    options: ["Kitobxona", "Kitobhona", "Kitobxonna", "Kitobhonna"],
    correctAnswer: 0,
    explanation: "Kitobxona so'zi to'g'ri yozilgan. Bu so'z kitob va xona so'zlaridan tashkil topgan.",
  },
  {
    id: "nl2",
    category: "nativeLanguage",
    question: "Qaysi gap tarkibida sifatdosh ishtirok etgan?",
    options: ["U kecha keldi", "Men kitob o'qidim", "Ishlaydigan odam charchamaydi", "Biz maktabga bordik"],
    correctAnswer: 2,
    explanation: "Ishlaydigan odam charchamaydi gapida 'ishlaydigan' so'zi sifatdosh hisoblanadi.",
  },
  {
    id: "nl3",
    category: "nativeLanguage",
    question: "Qaysi so'z ko'plik shaklida?",
    options: ["Kitob", "Daftar", "Bolalar", "Qalam"],
    correctAnswer: 2,
    explanation: "Bolalar so'zi ko'plik shaklida, -lar qo'shimchasi orqali yasalgan.",
  },
  {
    id: "nl4",
    category: "nativeLanguage",
    question: "Qaysi gap sodda gap hisoblanadi?",
    options: [
      "Quyosh chiqdi va havoni isitdi",
      "U keldi, lekin men uni ko'rmadim",
      "Kitob o'qidim",
      "Yomg'ir yog'di, shuning uchun darsga kechikdim",
    ],
    correctAnswer: 2,
    explanation: "Kitob o'qidim gapi sodda gap hisoblanadi, chunki unda bitta ega va bitta kesim mavjud.",
  },
  {
    id: "nl5",
    category: "nativeLanguage",
    question: "Qaysi so'z antonim emas?",
    options: ["Issiq-sovuq", "Katta-kichik", "Oq-qora", "Kitob-daftar"],
    correctAnswer: 3,
    explanation: "Kitob-daftar so'zlari antonim emas, ular bir-biriga zid ma'noni anglatmaydi.",
  },
  {
    id: "nl6",
    category: "nativeLanguage",
    question: "Qaysi so'z sinonim emas?",
    options: ["Chiroyli-go'zal", "Baland-past", "Yuz-bet", "Vatan-yurt"],
    correctAnswer: 1,
    explanation: "Baland-past so'zlari sinonim emas, ular antonim hisoblanadi.",
  },
  {
    id: "nl7",
    category: "nativeLanguage",
    question: "Qaysi so'z tarkibida qo'shimcha mavjud emas?",
    options: ["Kitoblar", "O'quvchi", "Maktab", "Ishchi"],
    correctAnswer: 2,
    explanation: "Maktab so'zi tarkibida qo'shimcha mavjud emas, u o'zak so'z hisoblanadi.",
  },
  {
    id: "nl8",
    category: "nativeLanguage",
    question: "Qaysi so'z tarkibida sifat mavjud?",
    options: ["Tez yugurdi", "Kitob o'qidi", "Qizil olma", "Uyga ketdi"],
    correctAnswer: 2,
    explanation: "Qizil olma birikmasida 'qizil' so'zi sifat hisoblanadi.",
  },
  {
    id: "nl9",
    category: "nativeLanguage",
    question: "Qaysi gap tarkibida ravish mavjud?",
    options: ["Men kitob o'qidim", "U tez yugurdi", "Qizil olma yedim", "Biz maktabga bordik"],
    correctAnswer: 1,
    explanation: "U tez yugurdi gapida 'tez' so'zi ravish hisoblanadi.",
  },
  {
    id: "nl10",
    category: "nativeLanguage",
    question: "Qaysi gap tarkibida fe'l mavjud emas?",
    options: ["Men kitob o'qidim", "U tez yugurdi", "Qizil olma shirin", "Biz maktabga bordik"],
    correctAnswer: 2,
    explanation: "Qizil olma shirin gapida fe'l mavjud emas, 'shirin' so'zi sifat hisoblanadi.",
  },
]

const mathematicsQuestions = [
  {
    id: "math1",
    category: "mathematics",
    question: "5 + 7 = ?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "5 + 7 = 12",
  },
  {
    id: "math2",
    category: "mathematics",
    question: "9 × 6 = ?",
    options: ["45", "54", "56", "63"],
    correctAnswer: 1,
    explanation: "9 × 6 = 54",
  },
  {
    id: "math3",
    category: "mathematics",
    question: "Agar x + 5 = 12 bo'lsa, x = ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "x + 5 = 12, x = 12 - 5 = 7",
  },
  {
    id: "math4",
    category: "mathematics",
    question: "Uchburchakning burchaklari yig'indisi nechaga teng?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1,
    explanation: "Uchburchakning burchaklari yig'indisi 180 gradusga teng.",
  },
  {
    id: "math5",
    category: "mathematics",
    question: "Agar a = 3 va b = 4 bo'lsa, a² + b² = ?",
    options: ["7", "12", "25", "49"],
    correctAnswer: 2,
    explanation: "a² + b² = 3² + 4² = 9 + 16 = 25",
  },
  {
    id: "math6",
    category: "mathematics",
    question: "Agar 3x - 7 = 14, x = ?",
    options: ["5", "7", "9", "21"],
    correctAnswer: 1,
    explanation: "3x - 7 = 14, 3x = 21, x = 7",
  },
  {
    id: "math7",
    category: "mathematics",
    question: "Kvadratning yuzi 36 sm² bo'lsa, uning tomoni necha sm?",
    options: ["4", "6", "9", "12"],
    correctAnswer: 1,
    explanation: "Kvadratning yuzi = a², 36 = a², a = 6 sm",
  },
  {
    id: "math8",
    category: "mathematics",
    question: "Agar 20% x = 15, x = ?",
    options: ["3", "30", "75", "300"],
    correctAnswer: 2,
    explanation: "20% x = 15, 0.2x = 15, x = 15/0.2 = 75",
  },
  {
    id: "math9",
    category: "mathematics",
    question: "Agar 2/5 x = 10, x = ?",
    options: ["4", "20", "25", "50"],
    correctAnswer: 2,
    explanation: "2/5 x = 10, x = 10 × 5/2 = 25",
  },
  {
    id: "math10",
    category: "mathematics",
    question: "Agar x² = 49, x = ?",
    options: ["±5", "±6", "±7", "±8"],
    correctAnswer: 2,
    explanation: "x² = 49, x = ±7",
  },
]

const historyQuestions = [
  {
    id: "hist1",
    category: "history",
    question: "O'zbekiston Respublikasi qachon mustaqillikka erishdi?",
    options: ["1989-yil 1-sentabr", "1990-yil 31-avgust", "1991-yil 31-avgust", "1992-yil 8-dekabr"],
    correctAnswer: 2,
    explanation: "O'zbekiston Respublikasi 1991-yil 31-avgustda mustaqillikka erishdi.",
  },
  {
    id: "hist2",
    category: "history",
    question: "O'zbekiston Respublikasining birinchi Prezidenti kim bo'lgan?",
    options: ["Shavkat Mirziyoyev", "Islom Karimov", "Abdulla Aripov", "Nigmatilla Yo'ldoshev"],
    correctAnswer: 1,
    explanation: "O'zbekiston Respublikasining birinchi Prezidenti Islom Karimov bo'lgan.",
  },
  {
    id: "hist3",
    category: "history",
    question: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
    options: ["1991-yil 31-avgust", "1992-yil 8-dekabr", "1993-yil 2-mart", "1995-yil 26-aprel"],
    correctAnswer: 1,
    explanation: "O'zbekiston Respublikasi Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan.",
  },
  {
    id: "hist4",
    category: "history",
    question: "Amir Temur qachon tug'ilgan?",
    options: ["1336-yil", "1356-yil", "1370-yil", "1405-yil"],
    correctAnswer: 0,
    explanation: "Amir Temur 1336-yilda tug'ilgan.",
  },
  {
    id: "hist5",
    category: "history",
    question: "Quyidagi qaysi shaxs Buxoro amirligining so'nggi amiri bo'lgan?",
    options: ["Muhammad Alixon", "Sayyid Olimxon", "Muzaffar", "Nasrulloxon"],
    correctAnswer: 1,
    explanation: "Sayyid Olimxon Buxoro amirligining so'nggi amiri bo'lgan (1910-1920).",
  },
  {
    id: "hist6",
    category: "history",
    question: "Quyidagi qaysi davlat O'zbekiston bilan chegaradosh emas?",
    options: ["Qozog'iston", "Tojikiston", "Turkmaniston", "Ozarbayjon"],
    correctAnswer: 3,
    explanation:
      "Ozarbayjon O'zbekiston bilan chegaradosh emas. O'zbekiston Qozog'iston, Qirg'iziston, Tojikiston, Afg'oniston va Turkmaniston bilan chegaradosh.",
  },
  {
    id: "hist7",
    category: "history",
    question: "O'zbekiston Respublikasi BMTga qachon a'zo bo'lgan?",
    options: ["1991-yil", "1992-yil", "1993-yil", "1994-yil"],
    correctAnswer: 1,
    explanation: "O'zbekiston Respublikasi 1992-yil 2-martda BMTga a'zo bo'lgan.",
  },
  {
    id: "hist8",
    category: "history",
    question: "Quyidagi qaysi shaxs 'Boburnoma' asarining muallifi?",
    options: ["Alisher Navoiy", "Zahiriddin Muhammad Bobur", "Abu Rayhon Beruniy", "Mirzo Ulug'bek"],
    correctAnswer: 1,
    explanation: "'Boburnoma' asarining muallifi Zahiriddin Muhammad Bobur hisoblanadi.",
  },
  {
    id: "hist9",
    category: "history",
    question: "O'zbekiston Respublikasining poytaxti qaysi shahar?",
    options: ["Samarqand", "Buxoro", "Toshkent", "Namangan"],
    correctAnswer: 2,
    explanation: "O'zbekiston Respublikasining poytaxti Toshkent shahri hisoblanadi.",
  },
  {
    id: "hist10",
    category: "history",
    question: "Quyidagi qaysi shaxs O'zbekiston Fanlar akademiyasining asoschisi hisoblanadi?",
    options: ["Qori Niyoziy", "Yusuf Xos Hojib", "Mirzo Ulug'bek", "Abu Ali ibn Sino"],
    correctAnswer: 0,
    explanation: "O'zbekiston Fanlar akademiyasining asoschisi Qori Niyoziy hisoblanadi.",
  },
]

// Combine all questions
const allQuestions = [...nativeLanguageQuestions, ...mathematicsQuestions, ...historyQuestions]

const TestContext = createContext()

export const useTest = () => useContext(TestContext)

export const TestProvider = ({ children }) => {
  const [questions, setQuestions] = useState(allQuestions)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [testCompleted, setTestCompleted] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [categoryScores, setCategoryScores] = useState({
    nativeLanguage: 0,
    mathematics: 0,
    history: 0,
  })

  const startTest = (category = null) => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setTestCompleted(false)
    setTestStarted(true)
    setCurrentCategory(category)
    setCategoryScores({
      nativeLanguage: 0,
      mathematics: 0,
      history: 0,
    })
  }

  const answerQuestion = (questionId, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerIndex,
    })
  }

  const nextQuestion = () => {
    const currentQuestions = getCurrentQuestions()
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateCategoryScores()
      setTestCompleted(true)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const getCurrentQuestions = () => {
    if (currentCategory) {
      return questions.filter((q) => q.category === currentCategory)
    }
    return questions
  }

  const calculateCategoryScores = () => {
    // Don't update state during calculation to avoid infinite loops
    const scores = {
      nativeLanguage: 0,
      mathematics: 0,
      history: 0,
    }

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        scores[question.category] += 1.1
      }
    })

    // Round to 1 decimal place
    scores.nativeLanguage = Math.round(scores.nativeLanguage * 10) / 10
    scores.mathematics = Math.round(scores.mathematics * 10) / 10
    scores.history = Math.round(scores.history * 10) / 10

    return scores
  }

  const calculateTotalScore = () => {
    const scores = calculateCategoryScores()
    const total = scores.nativeLanguage + scores.mathematics + scores.history
    return {
      categoryScores: scores,
      total: Math.round(total * 10) / 10,
      percentage: Math.round((total / 33) * 100),
    }
  }

  return (
    <TestContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        currentQuestion: getCurrentQuestions()[currentQuestionIndex],
        userAnswers,
        testCompleted,
        testStarted,
        currentCategory,
        categoryScores,
        startTest,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        calculateTotalScore,
        getCurrentQuestions,
      }}
    >
      {children}
    </TestContext.Provider>
  )
}
