import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, lazy } from "react";

const SummaryScene = lazy(() => import("../components/SummaryScene"));

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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-4"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <SummaryScene />
        </Suspense>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
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
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-2 sm:p-4 mb-16 shadow-2xl"
        >
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm <span className="text-indigo-400 font-semibold">Arpa Nihan</span>, a Junior Software Developer with a B.Sc in Computer Science & Engineering from Daffodil International University. Currently working at Business Automation Ltd., I specialize in web development, manual & API testing, and building modern web applications. I also have experience with WordPress, graphic design, and UI-focused solutions. 
            </p>
            <p>
              My focus is on <span className="text-cyan-400 font-semibold">clean, scalable architecture</span> and delivering high-quality software solutions. I thrive in collaborative environments, continuously improving my skills to ensure systems remain efficient, secure, and future-ready.
            </p>
            {/* Skills as a Sentence */}
            <p>
              I am skilled in <span className="text-cyan-400 font-semibold">HTML & CSS</span>, <span className="text-cyan-400 font-semibold">Bootstrap</span>, <span className="text-cyan-400 font-semibold">JavaScript</span>, <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Next.js</span>, <span className="text-cyan-400 font-semibold">Laravel</span>, <span className="text-cyan-400 font-semibold">MySQL</span>, <span className="text-cyan-400 font-semibold">WordPress</span>, <span className="text-cyan-400 font-semibold">Postman</span>, <span className="text-cyan-400 font-semibold">Cypress</span>, <span className="text-cyan-400 font-semibold">CodeLab</span>, and <span className="text-cyan-400 font-semibold">Newman</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;