import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, lazy } from "react";
const SummaryScene = lazy(() => import("../components/SummaryScene"));

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

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

      // Timeline items animation
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      gsap.from(items, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        x: -80,
        opacity: 0,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Business Automation Ltd.",
      period: "11/2023 – present",
      responsibilities: [
        "Led development of 5+ enterprise web applications using React and Laravel",
        "Mentored junior developers and conducted code reviews",
        "Architected scalable database solutions handling 100K+ daily users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      growth:
        "Promoted from Mid-Level after 8 months for exceptional performance",
    },
    {
      title: "Software Developer-fresher",
      company: "Cloud Production Ltd.",
      period: "03/2023 – 10/2023",
      responsibilities: [
        "Developed and maintained 10+ client projects from concept to deployment",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Implemented comprehensive testing with Cypress, achieving 90% coverage",
        "Collaborated with design team to create pixel-perfect responsive interfaces",
      ],
      growth:
        "Increased project delivery efficiency by 40% through process optimization",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work-experience"
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of growth, responsibility, and technical excellence
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative pl-8 sm:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] sm:left-[24px] top-2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900 shadow-lg shadow-indigo-500/50"></div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-gray-400">
                      <span className="text-indigo-400 font-semibold">
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  {/* <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-indigo-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul> */}

                  {/* Growth Highlight */}
                  {/* <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 text-xl">⭐</span>
                      <p className="text-indigo-300 text-sm font-medium">
                        {exp.growth}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
