import React, { useEffect, useState } from "react";
import me2 from "../../assets/images/me2.png";

const Header = ({ toggleLanguage, language }) => {
  const [activeSection, setActiveSection] = useState("#about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const content = {
    EN: {
      navigation: {
        about: "About",
        journey: "Journey",
        portfolio: "Portfolio", 
        skills: "Skills",
        contact: "Contact"
      },
      logoText: "Portfolio",
      menuClose: "Close menu",
      emailLabel: "Get in touch",
      availableText: "Available for projects"
    },
    UA: {
      navigation: {
        about: "Про мене",
        journey: "Досвід",
        portfolio: "Портфоліо",
        skills: "Навички", 
        contact: "Контакт"
      },
      logoText: "Портфоліо",
      menuClose: "Закрити меню",
      emailLabel: "Зв’язатися",
      availableText: "Доступний для проєктів"
    }
  };

  const currentContent = content[language];

  const navigationItems = [
    { href: "#about", label: currentContent.navigation.about, icon: "ri-user-line" },
    { href: "#journey", label: currentContent.navigation.journey, icon: "ri-road-map-line" },
    { href: "#portfolio", label: currentContent.navigation.portfolio, icon: "ri-briefcase-line" },
    { href: "#skills", label: currentContent.navigation.skills, icon: "ri-code-line" },
    { href: "#contact", label: currentContent.navigation.contact, icon: "ri-mail-line" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href);
      let current = sections[0];
      
      sections.forEach(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src={me2} 
                      alt="Artem Erdt" 
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="hidden sm:block">
                  <h2 className="text-xl font-bold text-headingColor group-hover:text-primaryColor transition-colors duration-200">
                    Artem
                  </h2>
                  <p className="text-sm text-smallTextColor -mt-1">
                    {currentContent.logoText}
                  </p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? 'text-primaryColor bg-primaryColor/10'
                      : 'text-smallTextColor hover:text-primaryColor hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primaryColor rounded-full"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Side - Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Language Toggle Switch */}
              <div className={`relative transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'opacity-100'
              }`}>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button
                    onClick={() => language !== "EN" && toggleLanguage()}
                    className={`relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      language === "EN"
                        ? 'text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 shadow-md'
                        : 'text-smallTextColor hover:text-primaryColor'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => language !== "UA" && toggleLanguage()}
                    className={`relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      language === "UA"
                        ? 'text-white bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 shadow-md'
                        : 'text-smallTextColor hover:text-primaryColor'
                    }`}
                  >
                    UA
                  </button>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="menu-toggle lg:hidden p-2 rounded-xl transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute h-0.5 w-full bg-smallTextColor transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}></span>
                  <span className={`absolute h-0.5 w-full bg-smallTextColor transform transition-all duration-300 top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute h-0.5 w-full bg-smallTextColor transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Mobile Menu Panel */}
        <div className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={me2} 
                  alt="Artem Erdt" 
                  className="w-8 h-8 object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-semibold text-headingColor">Artem Erdt</h3>
                <p className="text-xs text-smallTextColor">{currentContent.availableText}</p>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 duration-200"
              aria-label={currentContent.menuClose}
            >
            </button>
          </div>

          {/* Menu Navigation */}
          <nav className="px-6 py-8 flex-1">
            <ul className="space-y-4">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-4 py-4 px-4 rounded-2xl font-medium transition-all duration-200 ${
                      activeSection === item.href
                        ? 'text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 shadow-lg'
                        : 'text-smallTextColor hover:text-primaryColor hover:bg-gray-50'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeSection === item.href 
                        ? 'bg-white/20' 
                        : ''
                    }`}>
                      <i className={`${item.icon} text-xl ${
                        activeSection === item.href ? 'text-white' : 'text-primaryColor'
                      }`}></i>
                    </div>
                    <span className="font-semibold text-lg flex-1">{item.label}</span>
                    {activeSection === item.href && (
                      <i className="ri-arrow-right-s-line text-xl"></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer - Email Contact */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-smallTextColor mb-3">
                {currentContent.emailLabel}
              </p>
              <a
                href="mailto:artemerdt@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primaryColor to-purple-600 text-white font-medium px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <i className="ri-mail-line text-lg"></i>
                <span className="text-sm">artemerdt@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;