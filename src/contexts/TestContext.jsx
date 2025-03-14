"use client";

import { createContext, useState, useContext } from "react";

// Sample test questions
const sampleQuestions = [
  {
    id: 1,
    question:
      "Mamlakat aholisini ijtimoiy, siyosiy, iqtisodiy jihatdan barqarorligini ta’minlashda kiberxavfsizlikning o’rni qanday?",
    options: [
      " Davlat va biznes tizimlarini kiberhujumlardan himoya qilish",
      " Internet tezligini oshirish",
      "Kompyuter o‘yinlarini rivojlantirish",
      "Foydalanuvchilarga bepul Wi-Fi taqdim etish",
    ],
    correctAnswer: 0,
    explanation:
      "Izoh: Kiberxavfsizlik zamonaviy dunyoda milliy xavfsizlikning ajralmas qismi bo‘lib, mamlakatning ijtimoiy, siyosiy va iqtisodiy jihatdan barqarorligini ta’minlashda hal qiluvchi ahamiyat kasb etadi. Hukumat, xususiy sektor va fuqarolar o‘zaro hamkorlikda kiberxavfsizlik choralarini ko‘rsa, mamlakat raqobatbardoshligi va mustahkamligi oshadi.",
  },
  {
    id: 2,
    question:
      "O‘zbekiston Respublikasi kiberxavfsizlik to‘g‘risidagi qonunning asosiy ahamiyati nimada?",
    options: [
      "Davlat va fuqarolar ma’lumotlarini kiberxavflardan himoya qilish",
      "Internetdan foydalanishni cheklash",
      "Kompyuter o‘yinlarini nazorat qilish",
      "Mobil qurilmalarni ro‘yxatdan o‘tkazish majburiyati",
    ],
    correctAnswer: 0,
    explanation:
      "Izoh: Ushbu qonun kiberxavfsizlikni ta’minlash orqali davlat organlari, biznes va fuqarolar ma’lumotlarini himoya qilishga qaratilgan.",
  },
  {
    id: 3,
    question:
      "O’zbekistonda Respublikasia kiberxavfsizlikni yuksak darajada ta’manilash bo’yicha olib borilayotgan ishlar nimalardan iborat?",
    options: [
      "Maxsus qonunlar qabul qilinishi va kiberxavfsizlik strategiyalarining ishlab chiqilishi",
      "Foydalanuvchilarning shaxsiy ma’lumotlarini ommaga e’lon qilish",
      "Faqat davlat idoralariga antivirus dasturlarini o‘rnatish",
      "Internet tezligini pasaytirish",
    ],
    correctAnswer: 0,
    explanation:
      "Izoh: O‘zbekiston hukumati kiberxavfsizlikni mustahkamlash maqsadida maxsus qonunlar qabul qilib, yangi texnologik yechimlarni joriy qilmoqda va mutaxassislar tayyorlashga e’tibor qaratmoqda.",
  },
  {
    id: 4,
    question:
      "Kibermakon deganda nima tushuniladi va unda yuzaga kelishi mumkin bo’lgan qanday kibertahdidlar mavjud?",
    options: [
      "Internet va kompyuter tizimlari orqali bog‘langan virtual muhit",

      "Faqat davlat idoralarining maxfiy axborot tarmog‘i.",
      "Faqat ijtimoiy tarmoqlarning ishlash muhiti.",
      "Yangi texnologiyalarni rivojlantirish jarayoni.",
    ],
    correctAnswer: 0,
    explanation:
      "Izoh: To‘g‘ri javob – A. Kibermakon – bu internet, tarmoq tizimlari va raqamli texnologiyalar orqali bog‘langan virtual muhit bo‘lib, u har qanday onlayn faoliyatni o‘z ichiga oladi.",
  },
  {
    id: 5,
    question:
      "Kiberxavfsizlik obyekti hamda kiberxavfszilik subyekti bo’lib nimalar xizmat qiladi?",
    options: [
      "Kibermakon va uning foydalanuvchilari",

      "Axborot xavfsizligi va ijtimoiy tarmoqlar",
      "Shaxsiy ma’lumotlar va internet tezligi",
      "Xakerlar va hujum qilish usullari",
    ],
    correctAnswer: 0,
    explanation: `Izoh: Mamlakatning ijtimoiy, siyosiy va iqtisodiy jihatdan barqarorligini ta’minlashda kibermakon va uning foydalanuvchilari muhim rol o‘ynaydi. Chunki kibermakon davlat boshqaruvi, iqtisodiyot, ta’lim, sog‘liqni saqlash va boshqa sohalarga katta ta’sir ko‘rsatadi. Shu sababli, mamlakatda ijtimoiy, siyosiy va iqtisodiy barqarorlikni ta’minlash uchun kibermakondagi axborot xavfsizligi, fuqarolar huquqlari va iqtisodiy jarayonlar muvozanati ta’minlanishi kerak.`,
  },
  {
    id: 6,
    question:
      "Kiberxavfsizlik sohasida vakolatli davlat organi va uning asosiy vazifalari nimadan iborat?",
    options: [
      "Kiberxavfsizlikni muhofaza qilish, hujumlarni aniqlash va oldini olish",
      "Faqat internet tezligini nazorat qilish",
      "Shaxsiy kompyuterlarni ta’mirlash",
      "Internetdan foydalanuvchilar sonini kamaytirish",
    ],
    correctAnswer: 0,
    explanation: `Izoh: Kiberxavfsizlik sohasida vakolatli davlat organi kiberhujumlarni aniqlash, ularning oldini olish va axborot xavfsizligini ta’minlash bilan shug‘ullanadi. Shuningdek, normativ-huquqiy bazani yaratish, kiberjinoyatlarga qarshi kurashish va muassasalarni kiberxavfsizlik choralariga rioya qilishga majbur qilish uning asosiy vazifalaridan hisoblanadi.`,
  },
  {
    id: 7,
    question:
      "Siz bugungi kungacha asosiy yutuqlaringiz deb nimani bilasiz? Siz buni qanday boshqardingiz?",
    options: [
      "Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi – kiberxavfsizlikni tartibga solish ",

      "Markaziy bank – moliyaviy tranzaksiyalarni nazorat qilish",
      "Davlat xavfsizlik xizmati – milliy xavfsizlikni ta’minlash",
      "Ichki ishlar vazirligi – huquqbuzarliklarni aniqlash",
    ],
    correctAnswer: 0,
    explanation: `Izoh: O‘zbekistonda kiberxavfsizlik sohasini tartibga soluvchi asosiy organ – Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi bo‘lib, u axborot xavfsizligini ta’minlash va qonunchilikni nazorat qilish bilan shug‘ullanadi.`,
  },
  {
    id: 8,
    question:
      "Axborot xavfsizligi deganda nimani tushunasiz? ",
    options: [
      "Axborotning maxfiyligi, yaxlitligi va mavjudligini ta’minlash ",

      "Internet tezligini oshirish va ma’lumotlarni ommaga ochiq qilish",
      " Faqat davlat muassasalaridagi ma’lumotlarni himoya qilish",
      " Kompyuter viruslariga qarshi dasturlarni o‘rnatish",
    ],
    correctAnswer: 0,
    explanation: `Izoh: Axborot xavfsizligi – bu axborotning maxfiyligi, yaxlitligi va mavjudligini ta’minlashga qaratilgan chora-tadbirlar majmuasi. Bu shaxsiy, korporativ va davlat ma’lumotlarini ruxsatsiz foydalanish, o‘zgartirish yoki yo‘qotishdan himoya qilishni o‘z ichiga oladi.`,
  },
  {
    id: 9,
    question:
      "Risk nima va uning kiberxavfsizlikdagi o’rni?",
    options: [
      "Axborot tizimlariga tahdid soluvchi xavflar yig‘indisi",

      "Internet orqali muloqot qilish imkoniyati",
      "Tezkor internet xizmatidan foydalanish",
      "Faqatgina dasturiy ta’minot o‘zgarishlari",
    ],
    correctAnswer: 0,
    explanation: `Izoh: Kiberxavfsizlik doirasida kiberxavf tushunchasi, asosan, axborot tizimlari va ularning foydalanuvchilariga nisbatan mumkin bo‘lgan hujumlar, noqonuniy kirish, ma’lumotlarni o‘g‘irlash, firibgarlik va boshqa zararli faoliyatlarni o‘z ichiga oladi.`,
  },
];

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
  const [questions, setQuestions] = useState(sampleQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const startTest = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setTestCompleted(false);
    setTestStarted(true);
  };

  const answerQuestion = (questionId, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerIndex,
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    return {
      score: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100),
    };
  };

  const addQuestion = (question) => {
    const newId = Math.max(...questions.map((q) => q.id)) + 1;
    setQuestions([...questions, { ...question, id: newId }]);
  };

  const updateQuestion = (updatedQuestion) => {
    setQuestions(
      questions.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <TestContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        currentQuestion: questions[currentQuestionIndex],
        userAnswers,
        testCompleted,
        testStarted,
        startTest,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        calculateScore,
        addQuestion,
        updateQuestion,
        deleteQuestion,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
