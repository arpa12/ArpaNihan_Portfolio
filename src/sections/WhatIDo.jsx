import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, lazy } from "react";
const SummaryScene = lazy(() => import("../components/SummaryScene"));

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Responsive user interfaces with React, Next.js, and modern CSS frameworks.",
      skills: ["React", "Next.js", "HTML/CSS"],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "RESTful APIs and server-side applications with Laravel and MySQL.",
      skills: ["Laravel", "MySQL", "API Design"],
    },
    {
      icon: "🎨",
      title: "UI/UX Implementation",
      description:
        "Pixel-perfect web pages with attention to responsive design.",
      skills: ["Responsive Design", "CSS", "JavaScript"],
    },
    {
      icon: "🧪",
      title: "Testing & Quality Assurance",
      description: "End-to-end testing with Cypress for reliable applications.",
      skills: ["Cypress", "E2E Testing", "Debugging"],
    },
    {
      icon: "🚀",
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment.",
      skills: ["React + Laravel", "Database Design", "Deployment"],
    },
    {
      icon: "🔧",
      title: "Performance Optimization",
      description:
        "Code optimization and performance tuning for faster applications.",
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
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          {" "}
          <SummaryScene />{" "}
        </Suspense>
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
        </div>

        {/* Services List as simple list */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/40 border border-indigo-500/10 hover:border-indigo-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-semibold text-white text-base">
                    {service.title}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
