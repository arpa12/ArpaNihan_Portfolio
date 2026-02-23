import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryScene from "../components/SummaryScene";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

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

      // Cards animation
      const cards = cardsRef.current.querySelectorAll(".service-card");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
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

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks. Focus on performance, accessibility, and seamless user experience.",
      skills: ["React", "Next.js", "HTML/CSS"],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Creating robust server-side applications and RESTful APIs with Laravel. Implementing secure authentication, data validation, and efficient database operations.",
      skills: ["Laravel", "MySQL", "API Design"],
    },
    {
      icon: "🎨",
      title: "UI/UX Implementation",
      description:
        "Translating design mockups into pixel-perfect, interactive web pages. Ensuring consistency across devices and browsers with attention to detail.",
      skills: ["Responsive Design", "CSS", "JavaScript"],
    },
    {
      icon: "🧪",
      title: "Testing & Quality Assurance",
      description:
        "Writing comprehensive end-to-end tests with Cypress to ensure application reliability. Automated testing for critical user flows and edge cases.",
      skills: ["Cypress", "E2E Testing", "Debugging"],
    },
    {
      icon: "🚀",
      title: "Full Stack Solutions",
      description:
        "End-to-end development from concept to deployment. Integrating frontend and backend systems to create cohesive, production-ready applications.",
      skills: ["React + Laravel", "Database Design", "Deployment"],
    },
    {
      icon: "🔧",
      title: "Performance Optimization",
      description:
        "Analyzing and improving application performance through code optimization, lazy loading, caching strategies, and database query optimization.",
      skills: ["Code Optimization", "Performance Tuning", "Best Practices"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-i-do"
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
            What I{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized services and expertise I bring to every project
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
