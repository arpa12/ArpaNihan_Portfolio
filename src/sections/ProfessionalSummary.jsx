import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryScene from "../components/SummaryScene";

gsap.registerPlugin(ScrollTrigger);

const ProfessionalSummary = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
              and Computer Science and Engineering graduate focused on building
              scalable, high-performance web applications that solve real-world
              problems.
            </p>

            <p>
              With strong front-end and back-end expertise, I prioritize{" "}
              <span className="text-cyan-400 font-semibold">
                clean architecture and maintainable solutions
              </span>{" "}
              to ensure systems remain efficient, secure, and future-ready.
            </p>

            <p>
              I continuously improve my skills, collaborate effectively, and aim
              to deliver reliable software that creates meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
