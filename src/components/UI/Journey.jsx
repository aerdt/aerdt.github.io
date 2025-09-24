import React from "react";
import communityImg from "../../assets/images/community.png";
import goitImg from "../../assets/images/goit.png";
import freecodecampImg from "../../assets/images/freecodecamp.png";
import sbpImg from "../../assets/images/sbp.png";

const Journey = ({ language }) => {
  const content = {
    EN: {
      badge: "Career Timeline",
      title: "Design Journey",
      subtitle: "Throughout my career in other field (7+ years), I’ve always been involved in design to some extent—whether creating booklets, flyers, advertisements, brand logos, design systems, or even web services. In 2024, I finally embraced my true passion and officially began my journey as a Product Designer",
      current: "Current",
      years: "Years",
      companies: "Companies",
      projects: "Projects",
      milestones: {
        experience: "2+",
        companies: "2",
        projects: "8"
      }
    },
    UA: {
      badge: "Карʼєрний шлях",
      title: "Робота в дизайні",
      subtitle: "Протягом моєї кар’єри у іншій сфері (понад 7 років) я завжди певною мірою займався дизайном — створював буклети, флаєри, рекламні матеріали, логотипи брендів, дизайн-системи або навіть веб-сервіси. У 2024 році я нарешті усвідомив свою справжню пристрасть і офіційно обрав шлях продуктового дизайнера",
      current: "Зараз",
      years: "Роки досвіду",
      companies: "Компанії",
      projects: "Проєкти",
      milestones: {
        experience: "2+",
        companies: "2",
        projects: "8"
      }
    }
  };

  const currentContent = content[language];

  const journeyData = [
    {
      id: 1,
      year: "2024 - 2024",
      period: {
        EN: "2024 - 2025",
        UA: "2024 - 2025"
      },
      title: language === "EN" ? "Responsive Web Design" : "Адаптивний Веб-Дизайн",
      subtitle: language === "EN" ? "Education" : "Навчання",
      company: "freeCodeCamp",
      icon: freecodecampImg,
      color: "from-gray-500 to-gray-800",
      technologies: ["HTML/CSS", "JavaScript", "Visual Studio", "GitHub"],
      description: language === "EN"
        ? "A comprehensive online course that took roughly 300 hours to complete. Focused on learning the foundational skills required to build modern, accessible and mobile-friendly websites."
        : "Комплексний онлайн-курс, який тривав приблизно 300 годин. Орієнтований на вивчення базових навичок, необхідних для створення сучасних, доступних та адаптивних вебсайтів.",
    },
    {
      id: 2,
      year: "2024 - 2025",
      period: {
        EN: "2024 - 2025",
        UA: "2024 - 2025"
      },
      title: language === "EN" ? "Product Design" : "Продуктовий Дизайн",
      subtitle: language === "EN" ? "Education" : "Навчання",
      company: "GoIT",
      icon: goitImg,
      color: "from-orange-500 to-orange-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description: language === "EN"
        ? "An intensive, 6-month hands-on program during which I got experience with the skills needed to create user-centric digital products. The course emphasized practical experience, culminating in a portfolio of real-world projects."
        : "Інтенсивна 6-місячна практична програма, під час якої я здобув досвід у створенні цифрових продуктів, орієнтованих на користувача. Курс робив акцент на практичних завданнях і завершувався формуванням портфоліо реальних проєктів.",
    },
    {
      id: 3,
      year: "2025 - present",
      period: {
        EN: "2025 - present",
        UA: "2025 - дотепер"
      },
      title: language === "EN" ? "Product Designer" : "Продуктовий Дизайнер",
      subtitle: "Full-time",
      company: "Schuberg Philis",
      icon: sbpImg,
      color: "from-blue-500 to-blue-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description: language === "EN"
        ? "A complete redesign of a SaaS workload management dashboard. Developed a comprehensive design system from scratch, including typography, color palettes, UI components, icons, and interactive patterns, ensuring consistency across all screens. The project involved user research, prototyping, and iterative testing, resulting in a scalable and cohesive interface that enhanced efficiency for users managing complex workloads."
        : "Повний редизайн панелі керування робочими проєктами у SaaS. Розробив комплексну дизайн-систему з нуля, включно з типографікою, палітрою кольорів, UI-компонентами, іконками та інтерактивними елементами, що забезпечило послідовність на всіх екранах. Проєкт включав дослідження користувачів, прототипування та ітеративне тестування, що призвело до створення масштабованого та цілісного інтерфейсу, який підвищив ефективність користувачів у керуванні складними завданнями.",
    },
    {
      id: 4,
      year: "2025 - present",
      period: {
        EN: "2025 - present",
        UA: "2025 - дотепер"
      },
      title: language === "EN" ? "UX/UI Designer" : "UX/UI Дизайнер",
      subtitle: "Part-time",
      company: "Client Feedback Hub",
      icon: communityImg,
      color: "from-orange-500 to-orange-600",
      technologies: ["Figma", "FigJam", "ProtoPie", "Midjourney", "Sketch", "Adobe CC"],
      description: language === "EN"
        ? "Project focused on understanding user needs and improving the overall feedback experience.  Conducted deep user research, identifying pain points, preferences and potential selling points to inform the product strategy. Through interviews, surveys and usability testing, gathered actionable insights that shaped the information architecture, user flows, and interface design."
        : "Проєкт спрямований на розуміння потреб користувачів та покращення загального досвіду отримання зворотного зв’язку. Проведено глибоке дослідження користувачів, виявлено проблемні моменти, вподобання та потенційні точки продажу, що допомогли сформувати стратегію продукту. Через інтерв’ю, опитування та тестування зручності використання було зібрано практичні інсайти, які вплинули на інформаційну архітектуру, користувацькі потоки та дизайн інтерфейсу.",
    },
  ];

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-32 sm:w-72 h-32 sm:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <i className="ri-map-pin-time-line text-sm sm:text-base"></i>
            {currentContent.badge}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4 sm:mb-6" data-aos="fade-up">
            {currentContent.title}
          </h2>

          <p className="text-base sm:text-lg text-smallTextColor max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Mobile-First Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - only visible on larger screens */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500"></div>

            {/* Mobile center line */}
            <div className="sm:hidden absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primaryColor to-purple-500 opacity-30"></div>

            <div className="space-y-0 sm:space-y-8">
              {journeyData.slice().reverse().map((item, index) => (
                <div key={item.id}>
                  <div
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot for larger screens */}
                    <div className="hidden sm:flex absolute left-6 top-6 w-4 h-4 bg-white border-4 border-primaryColor rounded-full z-10"></div>

                    {/* Mobile timeline dot */}
                    <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2 top-8 w-6 h-6 bg-white border-4 border-primaryColor rounded-full z-10 shadow-lg">
                      <div className="w-full h-full bg-primaryColor rounded-full scale-50"></div>
                    </div>

                    {/* Card */}
                    <div className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-4 sm:mx-0 sm:ml-20 ${item.current ? 'ring-2 ring-primaryColor/30 shadow-primaryColor/10' : ''
                      }`}>

                      {/* Mobile year badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-xl text-sm font-bold`}>
                          <img src={item.icon} alt={item.title} className="w-6 h-6 filter brightness-0 invert" />
                          <span className="text-xs sm:text-sm">{item.period[language]}</span>
                        </div>

                        {/* Current badge */}
                        {item.current && (
                          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            {currentContent.current}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-headingColor mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 text-sm sm:text-base">
                          <span className="text-smallTextColor font-medium">{item.subtitle}</span>
                          <span className="hidden sm:inline text-gray-300">•</span>
                          <span className="text-primaryColor font-semibold">{item.company}</span>
                        </div>
                      </div>

                      <p className="text-smallTextColor mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 bg-primaryColor/10 text-primaryColor text-xs sm:text-sm font-medium rounded-lg hover:bg-primaryColor/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow - only show between items, not after last */}
                  {index < journeyData.length - 1 && (
                    <div className="sm:hidden flex justify-center py-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-primaryColor to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <i className="ri-arrow-down-line text-white text-sm"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primaryColor/5 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-primaryColor to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-hourglass-2-fill text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.experience}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
                  {currentContent.years}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-building-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.companies}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
                  {currentContent.companies}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-yellow-500 to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <i className="ri-pencil-ruler-line text-lg sm:text-2xl text-white"></i>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-headingColor">
                  {currentContent.milestones.projects}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-smallTextColor">
                  {currentContent.projects}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;