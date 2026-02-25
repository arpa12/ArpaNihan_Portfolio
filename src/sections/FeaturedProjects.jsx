import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import a2iImage from "../assets/a2i.png";
import mocatImage from "../assets/mocat.png";
import btbImage from "../assets/btb.png";
import bidaImage from "../assets/bida.png";

const SummaryScene = lazy(() => import("../components/SummaryScene"));

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const projects = [
    {
      title: "a2i-Dashboard",
      image: a2iImage,
      problem:
        "System needed Report Template Module, Activity Log, and Action Log features.",
      solution:
        "Implemented features using Laravel and resolved all UI issues.",
      impact:
        "Successfully deployed to Dev & UAT servers with managed fixes.",
      tech: ["Laravel", "CodeLab", "Testing"],
    },
    {
      title: "Mocat",
      image: mocatImage,
      problem: "Legacy system on Laravel 5.1 needed modernization.",
      solution:
        "Upgraded to Laravel 10 and resolved all compatibility issues.",
      impact:
        "Deployed to UAT and production with live issue handling.",
      tech: ["Laravel", "Migration", "CodeLab"],
    },
    {
      title: "BIDA",
      image: bidaImage,
      problem: "Required comprehensive automated testing coverage.",
      solution:
        "Performed end-to-end automation testing using Cypress.",
      impact:
        "Improved system stability and reliability significantly.",
      tech: ["Cypress", "Automation", "E2E"],
    },
    {
      title: "BTB",
      image: btbImage,
      problem:
        "Application needed full quality assurance validation.",
      solution:
        "Performed functional, regression, API, and UAT testing.",
      impact:
        "Ensured production-level reliability and performance.",
      tech: ["Postman", "API Testing", "QA"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-4"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <SummaryScene />
        </Suspense>
      </div>

      {/* Content Container (WIDER) */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-2">
        
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* ✅ Cards Grid — Equal Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-2 w-full shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              {/* IMAGE CONTAINER (Equal Size) */}
              <div className="w-full h-44 bg-black/40 rounded-xl flex items-center justify-center mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-32 w-auto object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-white mb-5 text-center">
                {project.title}
              </h4>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <span className="text-lg text-red-400 font-semibold">
                    ❗ Problem
                  </span>
                  <p className="text-gray-400 text-sm">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <span className="text-lg text-yellow-400 font-semibold">
                    💡 Solution
                  </span>
                  <p className="text-gray-400 text-sm">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <span className="text-lg text-green-400 font-semibold">
                    🚀 Impact
                  </span>
                  <p className="text-gray-400 text-sm">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tech}
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

export default FeaturedProjects;