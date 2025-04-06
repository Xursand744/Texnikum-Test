"use client"

import { useState } from "react"
import { Link } from "react-router"
import Header from "../components/Header"

const InterviewQuestionsPage = () => {
  const [activeCategory, setActiveCategory] = useState(1)

  const categories = [
    {
      id: 1,
      title: "Mamlakatda oʻz sohasiga oid amalga oshirilayotgan islohotlarning mohiyati va ahamiyatini tushunish",
      questions: [
        '"UZ" domenidagi domen nomlarini roʻyxatdan oʻtkazish va ulardan foydalanishdan koʻzlangan maqsad nima?',
        "Sunʼiy intellekt texnologiyalarini qoʻllab-quvvatlash uchun maxsus rejim tashkil etish va uning faoliyatini yoʻlga qoʻyishdan koʻzlangan maqsad nima?",
        "Ichki ishlar organlari faoliyatiga zamonaviy axborot texnologiyalarini keng joriy etish chora-tadbirlari toʻgʻrisidagi qarorda qanday vazifalar belgilangan?",
        "Mamlakatimizda axborot texnologiyalari va kompyuter dasturlash sohasida yosh mutaxassislarni ragʻbatlantirish boʻyicha qanday ishlar olib borilmoqda?",
        'Mahalliy davlat hokimiyati organlari faoliyatiga "E-qaror" elektron tizimini joriy etishdan koʻzlangan maqsad nima?',
        "Sunʼiy intellekt texnologiyalarini jadal joriy etish uchun shart-sharoitlar yaratishdan koʻzlangan maqsad nima?",
        "Oʻzbekiston Respublikasi Prezidentining Toshkent shahrida raqamli texnologiyalarni keng joriy etish chora-tadbirlari toʻgʻrisidagi qarorida qanday vazifalar belgilangan?",
        "Oʻzbekiston Respublikasida identifikatsiya ID-kartalarini rasmiylashtirish va berish tizimini joriy etish nima uchun kerak?",
        "Dasturiy taʼminot vositalari ishlab chiquvchilarining milliy reyestri deganda nimani tushunasiz?",
        "Axborot texnologiyalari va kommunikatsiyalarining joriy etilishini nazorat qilish, ularni himoya qilish nima uchun kerak?",
        "Dasturiy mahsulotlar va axborot texnologiyalari texnologik parki faoliyatini tashkil etish nima uchun kerak boʻldi?",
        "Dasturiy taʼminot vositalari eksporti va importi qilishdan koʻzlangan maqsad nima?",
        "Dasturiy mahsulotlar va axborot texnologiyalari texnologik parkini tashkil etishdan koʻzlangan maqsad nima?",
        "&quot;President Tech Award&quot; tanlovini tashkil etish koʻzlangan maqsad nima?",
        "Mamlakatda axborot-kommunikatsiya texnologiyalarini joriy qilish va rivojlantirish nima uchun kerak?",
        "Bir million dasturchi loyihasi yoshlarga qanday imkoniyatlarni taqdim etadi?",
        "Mamlakatimizda Axborot texnologiyalariga oid qanday o'quv yurtlarini bilasiz? Misol keltiring.",
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti va uning filiallari haqida nimalarni bilasiz?",
        "Mamlakatimizda Axborot texnologiyalariga oid qanday tashkilot va muassasalarni bilasiz?",
        "Mamlakatimizda axborotlashtirish va raqamlashtirish sohasida qanday ishlar amalga oshirilmoqda.",
        "Elektron hukumat deganda nimani tushunasiz?",
        "Davlat tashkilotlariga oid qanday axborot tizimlarini bilasiz?",
        "&quot;Raqamli O'zbekiston – 2030&quot; strategiyasi doirasida yurtimizda qanday ishlar amalga oshirilmoqda?",
        "Mamlakatimizda faoliyat yuritayotgan qanday mobil aloqa operatorlarini bilasiz?",
        "Mamlakatimizdagi onlayn to'lov tizimlari haqida nimalarni bilasiz?",
        "Yagona interaktiv davlat xizmatlari portal my.gov.uz portali haqida qanday xizmatlarni taqdim etadi?",
        "Mamlakatimizdagi IT park, IT maktab va IT texnikumlar haqida ayting",
        "Mamlakatimizdagi masofadan o'qitish tizimlari ma'lumot bering",
        "Mamlakatimizda Axborot kommunikatsiya texnologiyalari yo'nalishida qanday ishlar ishlar amalga oshirilmoqda?",
        "Mamlakatimizda Elektron hukumat boʻyicha loyihalar doirasida qanday tizimlar joriy etilgan?",
      ],
    },
    {
      id: 2,
      title: "Bakalavriat taʼlim yoʻnalishini tanlashda motivatsiya",
      questions: [
        "Kompyuter injiniringi yo'nalishini tanlashdan maqsadingiz nima?",
        "Sun'iy intellekt texnologiyalari qayerlarda qoʻllaniladi.",
        "Siz tanlagan ta'lim yo'nalishindagi imkoniyatlar haqida ayting.",
        "Axborot texnologiyalari mutaxassislari qanday muammolarni yechadilar?",
        "Axborot texnologiyalari mutaxassisini boshqa kasblardan afzalroq tomonlari bormi?",
        "Kompyuter injiniring mutaxassis mohiyati va ahamiyatini nimada?",
        "Kompyuter injiniring mutaxassis qanday muammolarni hal qiladi?",
        "Dasturiy injiniring mutaxassis mohiyati va ahamiyatini nimada?",
        "Dasturiy injiniring mutaxassisi qanday muammolarni hal qiladi?",
        "Axborot texnologiyalari boʻyicha xizmatlarni koʻrsatish nima uchun muhim?",
        "Dastur ishlab chiqarish va sotish nima uchun daromadli soha hisoblanadi?",
        "Axborot texnologiyalari boʻyicha yaxshi mutaxassis boʻlish uchun qaysi fanlarni yaxshi oʻzlashtirish kerak?",
        "Dasturlar insonlar hayotini yengillashtiradi deb oʻylaysizmi?",
        "Qanday dasturlardan nima maqsadda foydalanasiz?",
        "Dasturchi mutaxassislarni tayyorlash uchun universitetda oʻqish shartmi?",
        "Qanday qilib axborot texnologiyalaridan foydalanib internet orqali pul ishlash mumkin.",
        "Axborot texnologiyalari boʻyicha yirik kompaniyalar haqida nima bilasiz?",
        "Axborot texnologiyalari boʻyicha oʻqituvchilik kasbini boshqa kasblardan nima ustunligi bor?",
        "IT sohasining Mamlakatimizning rivojlanishidagi o'rni.",
        "Kompyuterda qaysi office dasturlari bilan ishlaganasiz?",
        "Yaxshi IT kadr bo'lib yetishish uchun chet tillarining o'rni qanday?",
        "Kompyuterning hardware va software qismlari nimalarni oʻz ichiga oladi?",
        "Respublikamizda IT park faoliyati haqida ayting.",
        "Siz tanlagan ta'lim yo'nalishining kelajagi haqida fikrlaringiz.",
      ],
    },
    {
      id: 3,
      title: "Shaxsiy-kasbiy xususiyatlar",
      questions: [
        "IT muhandislik kasbi insonga qanday masʼuliyat yuklaydi?",
        "IT muhandis qanday fazilatlarga ega boʻlishi lozim?",
        "IT muhandis boʻlish uchun qaysi bilimlar zarur?",
        "Shaxsiy qaror qabul qilinishida masʼuliyat, bilim, tajriba, maslahatlashish va murosa yoʻlini tanlashning qaysi biri eng muhim?",
        "Mustaqil qaror qabul qilishni har doim maʼqul deb hisoblaysizmi? Izoh bering.",
        "Sizning hayotingizda internet muhim oʻrin tutadimi?",
        "Sizningcha kompyuter oʻyinlariga qiziqish turli xil moliyaviy muammolarni tugʻdiradimi?",
        "Shu kungacha AKT sohasida qanday yutuqlarga erishgansiz?",
        "Sizga biror topshiriq berilsa boshqalar bilan maslahatlashasizmi, nima uchun?",
        "Sizningcha inson nega muvaffaqiyatga erisha olmaydi?",
        "5 yildan keyin oʻzingizni qanday qiyofada aks ettirasiz?",
        "Birinchi moliyaviy daromadingiz? Oxirgisichi?",
        "Inson nimani toʻgʻri tanlash kerak deb oʻylaysiz?",
        "Nima uchun bugun kunda til oʻrganishga boʻlgan talab yuqori deb oʻylaysiz? Siz qaysi tilni oʻrganyapsiz?",
        "Sizningcha kelajakda biror nimani oʻzgartira olaman deb oʻylaysizmi? Aynan nimani?",
        "Kаsb tanlashda nimalarga e'tibor qaratish kerak?",
        "Sizning hayotingizda internet muxim o'rin tutadimi?",
        "Axborot hurujlari haqida qanday fikr bildirasiz?",
        "Kasb tanlashda oila muhitining o'rni.",
        "Yoshlarga oid davlat siyosatining mazmun mohiyati.",
      ],
    },
    {
      id: 4,
      title: "Tanlangan bakalavriat taʼlim yoʻnalishi sohasidagi bilim va kasbiy koʻnikmalar",
      questions: [
        "Kompyuter xotirasini iyerarxik ko'rinishini soʻzlab bering",
        "Winodows oilasi opertasion tizimlari haqida soʻzlab bering",
        "BIOS va uning asosiy vazifasi haqida soʻzlab bering",
        "Fon Neyman arxitekturasini tushuntirib bering",
        "Driver nima va u qanday vazifa bajaradi",
        "Firewall bilan xavfsizlikni ta'minlash deganda nimani tushunasiz?",
        "Operativ xotira qanday xotira turiga kiradi va uning vazifalarini sanab bering",
        "Hyper Threading texnologiyasi haqida gapirib bering",
        "EHM larning rivojlanish davrlari haqida nimalarni bilasiz?",
        "Brauzerlar nima va qanday maqsadlarda qoʻllaniladi",
        "Total Commander qobiq dasturi haqida soʻzlab bering",
        "Kompyuter tizimida kesh xotiraning oʻrni, turlari va vazifalarini aytib bering",
        "Kompyuter tarmoqlarida bog'lanishlar boʻyicha qanday topologiyalarni bilasiz?",
        "Umumiy shina topologiyali lokal tarmoqlar haqida nimalarni bilasiz?",
        "Global va lokal tarmoq haqida gapirib bering",
        "OSI modeli sathlarini sanab bering",
        "FTP (File Transfer Protokol) protokoli haqida gapirib bering",
        "ЅMTP (Simple Mail Transfer Protocol protokoli haqida gapirib bering",
        "HTTP (Hyper Text Transfer Protocol) protokoli haqida gapirib bering",
        "Wi-Fi texnologiyasi haqida soʻzlab bering",
        "UTP kabeli haqida soʻzlab bering",
        "Modem turlari va vazifalarini aytib bering",
        "Klient-server arxitekturasini tushuntirib bering",
        "Sensor tarmoqlari elementlariga misol keltiring",
        "Sensor qurilmalarining asosiy vazifalarini sanab bering",
        "IoT texnologiyalari haqida gapirib bering",
        "Identifikatsiya va Autentifikatsiyani tushintirib bering",
        "NTFS fayl tizimi haqida soʻzlab bering",
        "Fat, Fat32 fayl tizimlari haqida soʻzlab bering",
        "Fragmentatsiya haqida nimalarni bilasiz?",
        "Operatsion tizim turlari va vazifalari?",
        "Operatsion tizimning asosiy tashkil etuvchilarini sanab bering",
        "Superkompyuterlar haqida nimalarni bilasiz?",
        "Linux operatsion tizimi haqida gapirib bering",
        "Monolit operatsion tizimlar haqida gapirib bering",
        "BIOS haqida nimalarni bilasiz?",
        "Antivirus dasturlari, ularning turlari va vazifalari haqida gapirib bering",
        "Multipleksorlash haqida gapirib bering",
        "Windows operatsion tizimida fayllarni boshqaruvchi tizimlar?",
        "Windows Ot da komand satrni chaqirib olish qanday amalga oshiriladi?",
        "Windows Ot da foydalanuvchini qoʻshish jarayonini tushuntiring",
        "Operatsion tizimlarda guruh tushunchasi?",
        "Sezar shifrlash usulini tushuntirib bering",
        "Elektron raqamli imzoni tushuntirib bering",
        "Office paketlarga odatda qaysi muharrirlar kiradi va ularning vazifalari?",
        "Makros nima? Misol keltiring",
        "Kompyuter viruslarining ta'siri boʻyicha turlanishi?",
        "Antivirus dasturlarning ishlash prinsipi?",
        "Arxivatorlarning turlari va vazifalari?",
        "Windows da dir va Linuxda ls buyruqlar vazifasi?",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-blue-50 p-6 mb-8">
            <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              SUHBAT JARAYONIDA BERILADIGAN NAMUNAVIY SAVOLLAR TOʻPLAMI
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.id}. {category.title.length > 30 ? category.title.substring(0, 30) + "..." : category.title}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">
                {categories.find((c) => c.id === activeCategory)?.title}
              </h2>

              <div className="space-y-4">
                {categories
                  .find((c) => c.id === activeCategory)
                  ?.questions.map((question, index) => (
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
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              to="/computer-engineering"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-200/50"
            >
              Kompyuter injiniringi bo'yicha savollar
            </Link>

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

export default InterviewQuestionsPage

