import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryScene from "../components/SummaryScene";

gsap.registerPlugin(ScrollTrigger);

const ProfessionalSummary = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

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

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
      });

      // Stats animation
      const statItems = statsRef.current.querySelectorAll(".stat-item");
      gsap.from(statItems, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "100%", label: "Success Rate" },
  ];

  return (
    <section
      ref={sectionRef}
      id="summary"
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
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Summary
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Summary Content */}
        <div
          ref={contentRef}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl"
        >
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a{" "}
              <span className="text-indigo-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              and Computer Science and Engineering graduate with hands-on
              experience building scalable, high-performance web applications. I
              focus on delivering structured, reliable, and user-centered
              digital solutions that solve real-world problems.
            </p>

            <p>
              With a strong foundation in both front-end and back-end
              development, I approach every project with{" "}
              <span className="text-cyan-400 font-semibold">
                clean architecture and long-term maintainability
              </span>{" "}
              in mind. My goal is to build systems that are efficient, secure,
              and ready to grow with evolving business needs.
            </p>

            <p>
              I am committed to continuous learning and professional growth,
              always striving to enhance performance, usability, and overall
              product quality. I take pride in collaborating effectively and
              delivering software that creates measurable impact.
            </p>
          </div>

          {/* Skills Highlight */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JS",
              "React",
              "Next.js",
              "Laravel",
              "MySQL",
              "Cypress",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 border border-indigo-500/50 text-indigo-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
