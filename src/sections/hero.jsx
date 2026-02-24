import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profileImage from "../assets/profileImage.png";
import { Suspense, lazy } from "react";
const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2 },
    )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6",
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5",
      )
      .fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=0.3",
      );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          {" "}
          <HeroScene />{" "}
        </Suspense>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Arpa Nihan
                </span>
              </h1>
              <h2
                ref={subtitleRef}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-indigo-400"
              >
                Full Stack Developer
              </h2>
            </div>

            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl"
            >
              I transform ideas into reliable, high-performing systems that help
              businesses grow, automate, and innovate.With years of hands-on
              experience delivering production-grade applications, I focus on
              clean architecture, long-term maintainability, and measurable
              results.
            </p>

            <div
              ref={ctaRef}
              className="flex gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <a
                href="#featured-projects"
                className="px-3 sm:px-5 py-2 text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/arpanihan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-5 py-2 text-sm sm:text-base border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Contact Me
              </a>
              <a
                href="/src/assets/resume.pdf"
                download="Arpa_Nihan_Resume.pdf"
                className="px-3 sm:px-5 py-2 text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-end lg:justify-end pr-4">
            <div
              ref={imageRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
