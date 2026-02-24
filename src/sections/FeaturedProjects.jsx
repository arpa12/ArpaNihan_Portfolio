import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, lazy } from "react";
const SummaryScene = lazy(() => import("../components/SummaryScene"));

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      // Button animation
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "a2i-Dashboard",
      problem:
        "System needed Report Template Module, Activity Log, and Action Log features.",
      solution:
        "Implemented features using Laravel, resolved all functional and UI issues through local testing.",
      impact:
        "Successfully deployed to Dev and UAT servers. Managed fixes via CodeLab.",
      tech: ["Laravel", "CodeLab", "Testing"],
    },
    {
      title: "Mocat",
      problem: "Legacy system running on Laravel 5.1 needed modernization.",
      solution:
        "Upgraded from Laravel 5.1 to Laravel 10, performed full system cross-checks and resolved syntax issues.",
      impact:
        "Deployed to UAT, fixed issues via CodeLab, then production deployment with live issue handling.",
      tech: ["Laravel", "Migration", "CodeLab"],
    },
    {
      title: "BIDA",
      problem: "System required comprehensive automated testing coverage.",
      solution:
        "Conducted end-to-end automation testing using Cypress covering key workflows.",
      impact:
        "Ensured system stability and reliability through automated test coverage.",
      tech: ["Cypress", "E2E Testing", "Automation"],
    },
    {
      title: "BTB",
      problem: "Application needed comprehensive quality assurance validation.",
      solution:
        "Performed Black Box, Functional (Integration, System, UAT, Smoke, Sanity, Regression), and API Testing.",
      impact:
        "Validated system quality through comprehensive testing methodologies using Postman.",
      tech: ["Postman", "API Testing", "QA"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
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
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Project Slider */}
        <div className="flex flex-col items-center w-full mb-12">
          <div className="flex items-center justify-center w-full mb-6">
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
                )
              }
              className="text-2xl text-indigo-400 hover:text-white px-4 py-2 rounded-full focus:outline-none"
              aria-label="Previous Project"
            >
              &#8592;
            </button>
            <span className="mx-4 text-lg text-gray-300 font-semibold">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
                )
              }
              className="text-2xl text-indigo-400 hover:text-white px-4 py-2 rounded-full focus:outline-none"
              aria-label="Next Project"
            >
              &#8594;
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 w-full max-w-3xl">
            {/* Project Title */}
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              {projects[currentIndex].title}
            </h4>
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {/* Problem */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">❗</span>
                  <h5 className="text-sm font-semibold text-red-400">
                    Problem
                  </h5>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {projects[currentIndex].problem}
                </p>
              </div>
              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💡</span>
                  <h5 className="text-sm font-semibold text-yellow-400">
                    Solution
                  </h5>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {projects[currentIndex].solution}
                </p>
              </div>
              {/* Impact */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🚀</span>
                  <h5 className="text-sm font-semibold text-green-400">
                    Impact
                  </h5>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {projects[currentIndex].impact}
                </p>
              </div>
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 justify-center">
              {projects[currentIndex].tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
