import React, { useState } from "react";
import "../../../src/styles.css";

// Import SVG files directly
import aiSvg from "../../assets/images/SVG/SVGs/ai.svg";
import claudeSvg from "../../assets/images/SVG/SVGs/claude.svg";
import cssSvg from "../../assets/images/SVG/SVGs/css.svg";
import figmaSvg from "../../assets/images/SVG/SVGs/figma.svg";
import githubSvg from "../../assets/images/SVG/SVGs/github.svg";
import htmlSvg from "../../assets/images/SVG/SVGs/html.svg";
import jsSvg from "../../assets/images/SVG/SVGs/js.svg";
import lovableSvg from "../../assets/images/SVG/SVGs/lovable.svg";
import midjourneySvg from "../../assets/images/SVG/SVGs/midjourney.svg";
import psSvg from "../../assets/images/SVG/SVGs/ps.svg";
import sketchSvg from "../../assets/images/SVG/SVGs/sketch.svg";
import vscodeSvg from "../../assets/images/SVG/SVGs/vs.svg";
import protopieSvg from "../../assets/images/SVG/SVGs/protopie.svg";
import framerSvg from "../../assets/images/SVG/SVGs/framer.svg";
import dalleSvg from "../../assets/images/SVG/SVGs/dalle.svg";
import notionSvg from "../../assets/images/SVG/SVGs/notion.svg";
import wixSvg from "../../assets/images/SVG/SVGs/wix.svg";
import trelloSvg from "../../assets/images/SVG/SVGs/trello.svg";

const Skills = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "all",
      labelEN: "All Skills",
      labelUA: "Всі навички",
      icon: "ri-apps-line",
      color: "from-gray-500 to-gray-700"
    },
    {
      id: "design",
      labelEN: "Design",
      labelUA: "Дизайн",
      icon: "ri-palette-line",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "tools",
      labelEN: "Tools",
      labelUA: "Інструменти розробки",
      icon: "ri-tools-line",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: "languages",
      labelEN: "Languages",
      labelUA: "Мови програмування",
      icon: "ri-code-s-slash-line",
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: "ai",
      labelEN: "AI",
      labelUA: "ШІ",
      icon: "ri-robot-2-line",
      color: "from-green-500 to-emerald-600"
    },
  ];

  const skillsData = [
    // Design
    {
      name: "Figma",
      category: "design",
      icon: figmaSvg,
      proficiency: 95,
      description: language === "EN" ? "UI/UX design & prototyping" : "UI/UX дизайн та прототипування",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Sketch",
      category: "design",
      icon: sketchSvg,
      proficiency: 90,
      description: language === "EN" ? "UI/UX design & prototyping" : "UI/UX дизайн та прототипування",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Adobe Photoshop",
      category: "design",
      icon: psSvg,
      proficiency: 85,
      description: language === "EN" ? "Graphic Design & Illustration" : "Графічний дизайн та ілюстрація",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Adobe Illustrator",
      category: "design",
      icon: aiSvg,
      proficiency: 85,
      description: language === "EN" ? "Graphic Design & Illustration" : "Графічний дизайн та ілюстрація",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "ProtoPie",
      category: "design",
      icon: protopieSvg,
      proficiency: 80,
      description: language === "EN" ? "Interactive Prototyping & Animation" : "Інтерактивне прототипування та анімація",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Framer",
      category: "design",
      icon: framerSvg,
      proficiency: 75,
      description: language === "EN" ? "Interactive Prototyping & Animation" : "Інтерактивне прототипування та анімація",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Wix",
      category: "design",
      icon: wixSvg,
      proficiency: 60,
      description: language === "EN" ? "Interactive Prototyping & Animation" : "Інтерактивне прототипування та анімація",
      color: "from-purple-400 to-purple-600"
    },

    // Tools
    {
      name: "VS Code",
      category: "tools",
      icon: vscodeSvg,
      proficiency: 90,
      description: language === "EN" ? "Code Editing & Debugging" : "Кодування та налагодження",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "GitHub",
      category: "tools",
      icon: githubSvg,
      proficiency: 90,
      description: language === "EN" ? "Version Control & Collaboration" : "Versiebeheer en samenwerking",
      color: "from-gray-600 to-gray-800"
      
    },
    {
      name: "Trello",
      category: "tools",
      icon: trelloSvg,
      proficiency: 90,
      description: language === "EN" ? "Project Management & Documentation" : "Менеджмент проектів та документація",
      color: "from-cyan-400 to-blue-600"
    },
    {
      name: "Notion",
      category: "tools",
      icon: notionSvg,
      proficiency: 70,
      description: language === "EN" ? "Project Management & Documentation" : "Менеджмент проектів та документація",
      color: "from-gray-500 to-gray-800"
    },

    // Languages
    {
      name: "HTML",
      category: "languages",
      icon: htmlSvg,
      proficiency: 70,
      description: language === "EN" ? "Semantic markup & accessibility" : "Semantische markup & toegankelijkheid",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "CSS3",
      category: "languages",
      icon: cssSvg,
      proficiency: 70,
      description: language === "EN" ? "Modern layouts & animations" : "Moderne layouts & animaties",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: jsSvg,
      proficiency: 20,
      description: language === "EN" ? "ES6+ & DOM manipulation" : "ES6+ & DOM",
      color: "from-yellow-400 to-orange-500"
    },

    // AI
    {
      name: "Lovable.ai",
      category: "ai",
      icon: lovableSvg,
      proficiency: 80,
      description: language === "EN" ? "Generative Design" : "Дизайн із використанням AI",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Midjourney.ai",
      category: "ai",
      icon: midjourneySvg,
      proficiency: 80,
      description: language === "EN" ? "Generative Design" : "Дизайн із використанням AI",
      color: "from-purple-600 to-indigo-600"
    },
    {
      name: "Cloude.ai",
      category: "ai",
      icon: claudeSvg,
      proficiency: 70,
      description: language === "EN" ? "Generative Design" : "Дизайн із використанням AI",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "DALL-E",
      category: "ai",
      icon: dalleSvg,
      proficiency: 70,
      description: language === "EN" ? "Generative Design" : "Дизайн із використанням AI",
      color: "from-gray-400 to-gray-500"
    },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getOverallProficiency = (category) => {
    const categorySkills = category === "all"
      ? skillsData
      : skillsData.filter(skill => skill.category === category);

    const average = categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length;
    return Math.round(average);
  };

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primaryColor/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primaryColor/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-purple-500/20 rotate-12 animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primaryColor/10 text-primaryColor px-4 py-2 rounded-full text-sm font-medium mb-3">
            <i className="ri-code-s-slash-line text-base"></i>
            {language === "EN" ? "Technical Expertise" : "Технічні навички"}
          </div>

          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-headingColor font-bold text-3xl md:text-4xl mb-4"
          >
            {language === "EN" ? "My Skills" : "Мої навички"}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="lg:max-w-2xl mx-auto text-gray-600 text-base leading-relaxed"
          >
            {language === "EN"
              ? "Technical skills and proficiencies across different technologies and tools"
              : "Технічні навички та компетенції у різних технологіях та інструментах"}
          </p>
        </div>

        {/* Category Filter */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                group relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 
                transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2
                ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primaryColor/25`
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-primaryColor hover:text-primaryColor'
                }
              `}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{language === "EN" ? category.labelEN : category.labelUA}</span>

              {/* Proficiency indicator */}
              <div className={`
                px-2 py-1 text-xs rounded-full font-bold
                ${activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {getOverallProficiency(category.id)}%
              </div>

              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/10 to-blue-600/10 rounded-2xl opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 50}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-400"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-3">
                <div className={`
                  w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl 
                  flex items-center justify-center shadow-md group-hover:shadow-lg
                  transform group-hover:scale-110 transition-all duration-300
                `}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Skill Info */}
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-headingColor mb-1 group-hover:text-primaryColor transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    {language === "EN" ? "Skill" : "Навичка"}
                  </span>
                  <span className="text-xs font-bold text-primaryColor">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.proficiency}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Experience Level Badge */}
              <div className="flex justify-center">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-bold
                  ${skill.proficiency >= 90 ? 'bg-green-100 text-green-800' :
                    skill.proficiency >= 80 ? 'bg-blue-100 text-blue-800' :
                      skill.proficiency >= 70 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-orange-100 text-orange-800'
                  }
                `}>
                  {skill.proficiency >= 90 ? (language === "EN" ? "Expert" : "Експерт") :
                    skill.proficiency >= 80 ? (language === "EN" ? "Advanced" : "Просунутий") :
                      skill.proficiency >= 70 ? (language === "EN" ? "Intermediate" : "Середній") :
                        (language === "EN" ? "Learning" : "Вивчаю")}
                </span>
              </div>

              {/* Decorative corner element */}
              <div className={`
                absolute top-3 right-3 w-6 h-6 bg-gradient-to-r ${skill.color} 
                rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300
              `}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="mt-10 bg-gradient-to-r from-primaryColor/5 to-blue-50 rounded-2xl p-6 md:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-headingColor mb-3">
              {language === "EN" ? "Skills Overview" : "Огляд навичок"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.filter(cat => cat.id !== "all").map((category) => (
              <div key={category.id} className="text-center">
                <div className={`
                  w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl 
                  flex items-center justify-center mx-auto mb-3 shadow-lg
                  hover:scale-110 transition-transform duration-300
                `}>
                  <i className={`${category.icon} text-lg text-white`}></i>
                </div>
                <h4 className="font-bold text-base text-headingColor mb-1">
                  {getOverallProficiency(category.id)}%
                </h4>
                <p className="text-gray-600 text-xs">
                  {language === "EN" ? category.labelEN : category.labelUA}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="ri-lightbulb-line text-lg"></i>
            <span className="text-sm">
              {language === "EN"
                ? "Always learning new technologies"
                : "Завжди вивчаю щось нове"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;