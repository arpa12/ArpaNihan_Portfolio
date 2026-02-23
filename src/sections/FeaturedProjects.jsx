import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryScene from "../components/SummaryScene";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

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

      // Projects animation
      const projects = projectsRef.current.querySelectorAll(".project-card");
      gsap.from(projects, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      problem:
        "Client needed a scalable online store with real-time inventory management and secure payment processing.",
      solution:
        "Built a full-stack e-commerce solution using React, Next.js for SEO optimization, Laravel backend with MySQL for robust data handling, and integrated Stripe payment gateway.",
      impact:
        "Increased online sales by 150% in 3 months. Reduced cart abandonment rate by 40% through optimized checkout flow.",
      tech: ["React", "Next.js", "Laravel", "MySQL"],
    },
    {
      title: "Corporate Dashboard & Analytics",
      problem:
        "Company struggled with scattered data across multiple platforms, making decision-making slow and inefficient.",
      solution:
        "Developed a centralized dashboard with real-time data visualization, automated reporting, and role-based access control using React and Laravel REST APIs.",
      impact:
        "Reduced report generation time from 3 hours to 5 minutes. Improved team productivity by 60% through instant data access.",
      tech: ["React", "Laravel", "MySQL", "Chart.js"],
    },
    {
      title: "Booking Management System",
      problem:
        "Service-based business faced double bookings and manual scheduling errors causing customer dissatisfaction.",
      solution:
        "Created an automated booking system with conflict detection, email notifications, and customer self-service portal. Comprehensive Cypress testing ensured reliability.",
      impact:
        "Eliminated double bookings completely. Customer satisfaction increased by 85%. Saved 20 hours/week in manual scheduling.",
      tech: ["React", "Laravel", "MySQL", "Cypress"],
    },
    {
      title: "Content Management Platform",
      problem:
        "Media company needed a custom CMS for managing articles, videos, and user engagement with SEO optimization.",
      solution:
        "Built a headless CMS with Next.js frontend for optimal performance, Laravel backend for content management, and implemented caching strategies for fast load times.",
      impact:
        "Improved page load speed by 70%. Organic traffic increased by 120% within 6 months. Content publishing time reduced by 50%.",
      tech: ["Next.js", "Laravel", "MySQL", "SEO"],
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
        <SummaryScene />
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
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Real projects, real impact — solving business problems with code
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {project.title}
              </h3>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">❗</span>
                    <h4 className="text-lg font-semibold text-red-400">
                      Problem
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💡</span>
                    <h4 className="text-lg font-semibold text-yellow-400">
                      Solution
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🚀</span>
                    <h4 className="text-lg font-semibold text-green-400">
                      Impact
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
