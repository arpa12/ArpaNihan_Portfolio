import Hero from "./sections/hero";
import ProfessionalSummary from "./sections/ProfessionalSummary";
import WhatIDo from "./sections/WhatIDo";
import FeaturedProjects from "./sections/FeaturedProjects";
import WorkExperience from "./sections/WorkExperience";
import Skills from "./sections/Skills";
import CallToAction from "./sections/CallToAction";

const App = () => {
  return (
    <>
      <Hero />
      <ProfessionalSummary />
      {/* <WhatIDo /> */}
      <FeaturedProjects />
      <WorkExperience />
      <Skills />
      <CallToAction />
    </>
  );
};

export default App;
