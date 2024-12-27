import React from "react";
import { MapPin, Clock } from "lucide-react";
import TestimonialCarousel from "../../components/carousel/TestimonialsCaroussel";

const About = ({ language }) => {
  const stats = [
    {
      icon: (
        <img
          src="./images/mountain.svg"
          alt="Mountain icon"
          className="text-indigo-600"
        />
      ),
      value: "5000+",
      label: {
        en: "Attraction places",
        ru: "Места привлечения",
        uz: "Diqqatga sazovor joylar",
      },
    },
    {
      icon: <Clock className="w-16 h-16 text-slate-400" />,
      value: "24/7",
      label: {
        en: "Support",
        ru: "Поддержка",
        uz: "Qo'llab-quvvatlash",
      },
    },
    {
      icon: (
        <img
          src="./images/boat.svg"
          alt="Boat icon"
          className="text-indigo-600"
        />
      ),
      value: "15 Countries",
      label: {
        en: "Countries",
        ru: "Стран",
        uz: "Davlatlar",
      },
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: {
        en: "Business Traveler",
        ru: "Бизнес-путешественник",
        uz: "Biznes sayohatchi",
      },
      comment: {
        en: "Outstanding service and attention to detail. Made my business trips hassle-free!",
        ru: "Отличный сервис и внимание к деталям. Сделали мои деловые поездки беспроблемными!",
        uz: "Ajoyib xizmat va tafsilotlarga e'tibor. Biznes safarlarimni muammosiz qildi!",
      },
    },
    {
      name: "Anna Petrova",
      role: {
        en: "Family Tourist",
        ru: "Семейный турист",
        uz: "Oilaviy sayyoh",
      },
      comment: {
        en: "Perfect organization of our family vacation. The kids were thrilled!",
        ru: "Идеальная организация нашего семейного отдыха. Дети были в восторге!",
        uz: "Oilaviy ta'tilimizning mukammal tashkil etilishi. Bolalar xursand bo'lishdi!",
      },
    },
    {
      name: "Maria Rodriguez",
      role: {
        en: "Solo Adventurer",
        ru: "Одиночный путешественник",
        uz: "Yolg'iz sarguzashtchi",
      },
      comment: {
        en: "Amazing cultural tours and local experiences. Truly unforgettable!",
        ru: "Удивительные культурные туры и местный опыт. Действительно незабываемо!",
        uz: "Ajoyib madaniy sayohatlar va mahalliy tajribalar. Haqiqatan ham unutilmas!",
      },
    },
    {
      name: "Viktor Ivanov",
      role: {
        en: "Group Coordinator",
        ru: "Координатор группы",
        uz: "Guruh koordinatori",
      },
      comment: {
        en: "Excellent coordination for our large group. Everything went smoothly.",
        ru: "Отличная координация для нашей большой группы. Все прошло гладко.",
        uz: "Katta guruhimiz uchun ajoyib muvofiqlashtirish. Hamma narsa yaxshi o'tdi.",
      },
    },
    {
      name: "Sarah Johnson",
      role: {
        en: "Honeymoon Couple",
        ru: "Молодожены",
        uz: "Asal oyi juftligi",
      },
      comment: {
        en: "Our honeymoon was magical thanks to their romantic package options!",
        ru: "Наш медовый месяц был волшебным благодаря их романтическим пакетам!",
        uz: "Asal oyimiz ularning romantik paket variantlari tufayli sehrli bo'ldi!",
      },
    },
    {
      name: "Akmal Yusupov",
      role: {
        en: "Local Guide",
        ru: "Местный гид",
        uz: "Mahalliy gid",
      },
      comment: {
        en: "Great partnership and professional approach to tourism!",
        ru: "Отличное партнерство и профессиональный подход к туризму!",
        uz: "Ajoyib hamkorlik va turizmga professional yondashuv!",
      },
    },
    {
      name: "Emma Wilson",
      role: {
        en: "Photography Enthusiast",
        ru: "Фотограф-энтузиаст",
        uz: "Fotograf havaskor",
      },
      comment: {
        en: "Perfect photo locations and timing suggestions. Got amazing shots!",
        ru: "Идеальные места для фото и рекомендации по времени. Получились потрясающие снимки!",
        uz: "Mukammal foto joylari va vaqt bo'yicha maslahatlar. Ajoyib suratlar oldim!",
      },
    },
    {
      name: "Dmitriy Popov",
      role: {
        en: "Corporate Client",
        ru: "Корпоративный клиент",
        uz: "Korporativ mijoz",
      },
      comment: {
        en: "Reliable partner for our company's team-building events.",
        ru: "Надежный партнер для корпоративных мероприятий нашей компании.",
        uz: "Kompaniyamizning jamoa tuzish tadbirlari uchun ishonchli hamkor.",
      },
    },
    {
      name: "Aziza Karimova",
      role: {
        en: "Student Group Leader",
        ru: "Руководитель студенческой группы",
        uz: "Talabalar guruhi rahbari",
      },
      comment: {
        en: "Educational and fun tours for our international students!",
        ru: "Познавательные и веселые туры для наших иностранных студентов!",
        uz: "Xalqaro talabalarimiz uchun ma'rifiy va qiziqarli sayohatlar!",
      },
    },
    {
      name: "Chen Wei",
      role: {
        en: "International Tourist",
        ru: "Международный турист",
        uz: "Xalqaro sayyoh",
      },
      comment: {
        en: "Wonderful cultural experience and very accommodating staff.",
        ru: "Замечательный культурный опыт и очень услужливый персонал.",
        uz: "Ajoyib madaniy tajriba va juda mehribon xodimlar.",
      },
    },
    {
      name: "Olga Smirnova",
      role: {
        en: "Luxury Traveler",
        ru: "Люкс путешественник",
        uz: "Hashamatli sayohatchi",
      },
      comment: {
        en: "Premium service that exceeded all expectations!",
        ru: "Премиум-сервис, превзошедший все ожидания!",
        uz: "Barcha kutilganlardan yuqori bo'lgan premium xizmat!",
      },
    },
    {
      name: "Mohammed Al-Rashid",
      role: {
        en: "VIP Client",
        ru: "ВИП-клиент",
        uz: "VIP mijoz",
      },
      comment: {
        en: "Discrete and professional service for our delegation.",
        ru: "Деликатный и профессиональный сервис для нашей делегации.",
        uz: "Delegatsiyamiz uchun diskret va professional xizmat.",
      },
    },
    {
      name: "Nina Sokolova",
      role: {
        en: "Senior Tourist",
        ru: "Турист пенсионер",
        uz: "Katta yoshli sayyoh",
      },
      comment: {
        en: "Very attentive to the needs of elderly travelers.",
        ru: "Очень внимательны к потребностям пожилых путешественников.",
        uz: "Katta yoshli sayohatchilarning ehtiyojlariga juda e'tiborli.",
      },
    },
    {
      name: "David Miller",
      role: {
        en: "Adventure Seeker",
        ru: "Искатель приключений",
        uz: "Sarguzasht izlovchi",
      },
      comment: {
        en: "Fantastic extreme sports packages and safety measures!",
        ru: "Фантастические пакеты экстремального спорта и меры безопасности!",
        uz: "Ajoyib ekstremal sport paketlari va xavfsizlik choralari!",
      },
    },
    {
      name: "Yuri Kovalev",
      role: {
        en: "History Buff",
        ru: "Любитель истории",
        uz: "Tarix ishqibozi",
      },
      comment: {
        en: "Incredibly knowledgeable guides about local history!",
        ru: "Невероятно знающие гиды по местной истории!",
        uz: "Mahalliy tarix bo'yicha g'oyatda bilimdon gidlar!",
      },
    },
    {
      name: "Fatima Hassan",
      role: {
        en: "Cultural Explorer",
        ru: "Исследователь культуры",
        uz: "Madaniyat tadqiqotchisi",
      },
      comment: {
        en: "Deep insights into local traditions and customs.",
        ru: "Глубокое понимание местных традиций и обычаев.",
        uz: "Mahalliy an'analar va urf-odatlar haqida chuqur tushuncha.",
      },
    },
    {
      name: "Boris Kozlov",
      role: {
        en: "Winter Sports Enthusiast",
        ru: "Любитель зимних видов спорта",
        uz: "Qishki sport ishqibozi",
      },
      comment: {
        en: "Great winter packages and experienced instructors!",
        ru: "Отличные зимние пакеты и опытные инструкторы!",
        uz: "Ajoyib qishki paketlar va tajribali murabbiylar!",
      },
    },
    {
      name: "Lisa Anderson",
      role: {
        en: "Eco-Tourist",
        ru: "Эко-турист",
        uz: "Eko-sayyoh",
      },
      comment: {
        en: "Appreciate their commitment to sustainable tourism.",
        ru: "Ценю их приверженность устойчивому туризму.",
        uz: "Ularning barqaror turizmga sodiqligini qadrlayman.",
      },
    },
    {
      name: "Alisher Usmanov",
      role: {
        en: "Local Business Owner",
        ru: "Владелец местного бизнеса",
        uz: "Mahalliy biznes egasi",
      },
      comment: {
        en: "Great cooperation in promoting local businesses!",
        ru: "Отличное сотрудничество в продвижении местного бизнеса!",
        uz: "Mahalliy biznesni rivojlantirishda ajoyib hamkorlik!",
      },
    },
    {
      name: "Sophia Martinez",
      role: {
        en: "Art Enthusiast",
        ru: "Ценитель искусства",
        uz: "San'at ishqibozi",
      },
      comment: {
        en: "Wonderful art gallery tours and cultural programs!",
        ru: "Замечательные туры по художественным галереям и культурные программы!",
        uz: "Ajoyib san'at galereyasi sayohatlari va madaniy dasturlar!",
      },
    },
  ];

  const TestimonialCard = ({ name, role, comment }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-600 mb-4">{language(role)}</p>
      <p className="text-gray-800">{language(comment)}</p>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 bg-gradient-to-r from-green-700 to-teal-700 rounded-lg shadow-lg h-[220px] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-300 opacity-50 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-300 opacity-50 rounded-full blur-xl transform translate-x-1/2 translate-y-1/2"></div>

          <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            {language({ en: "About Us", ru: "О нас", uz: "Biz haqimizda" })}
          </h1>
          <p className="text-lg max-w-3xl px-6 text-white font-medium drop-shadow-md">
            {language({
              en: "Discover more about our journey, our values, and how we strive to serve you.",
              ru: "Узнайте больше о нашем пути, наших ценностях и о том, как мы стремимся служить вам.",
              uz: "Bizning yo'limiz, qadriyatlarimiz va sizga qanday xizmat qilishimiz haqida ko'proq bilib oling.",
            })}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex w-[80px] items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <p className="text-gray-600 mt-2">{language(stat.label)}</p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-4 bg-indigo-600 text-white text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6" />
              <h2 className="text-xl font-semibold">
                {language({
                  en: "Visit to us",
                  ru: "Посетите нас",
                  uz: "Bizga tashrif buyuring",
                })}
              </h2>
            </div>
          </div>
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=72.246827,40.642406&z=14"
            className="w-full h-[500px]"
            title="Agency Location"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language({
              en: "Comments from Clients",
              ru: "Комментарии клиентов",
              uz: "Mijozlarimiz fikrlari",
            })}
          </h2>
          <TestimonialCarousel
            testimonials={testimonials}
            language={language}
          />
        </section>
      </div>
    </div>
  );
};

export default About;
