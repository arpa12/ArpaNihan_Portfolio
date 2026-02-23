import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryScene from "../components/SummaryScene";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      // Categories animation
      const categories =
        categoriesRef.current.querySelectorAll(".skill-category");
      gsap.from(categories, {
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        "Laravel",
        "PHP",
        "RESTful APIs",
        "Authentication & Authorization",
        "Server-Side Logic",
      ],
    },
    {
      title: "Database Management",
      icon: "💾",
      skills: [
        "MySQL",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
        "Migrations & Seeding",
      ],
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: [
        "Cypress",
        "End-to-End Testing",
        "Test Automation",
        "Debugging",
        "Cross-Browser Testing",
      ],
    },
    {
      title: "Development Tools",
      icon: "🔧",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "npm/Composer",
        "Chrome DevTools",
        "Linux/Windows",
      ],
    },
    {
      title: "Core Competencies",
      icon: "💡",
      skills: [
        "Problem Solving",
        "Clean Code",
        "Agile/Scrum",
        "Team Collaboration",
        "Code Review",
        "Documentation",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <SummaryScene />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical stack and expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-indigo-400">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
