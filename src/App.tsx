import React from "react";
import Hero from "./components/hero/Hero";
import Showcase from "./components/showcase/Showcase";
import NavBar from "./components/nav-bar/NavBar";
import Feature from "./components/features/Feature";
import Experience from "./components/experience/Experience";
import TechStack from "./components/tech-stack/TechStack";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  const showcaseRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <NavBar />
      <Hero ref={showcaseRef} />
      <Showcase ref={showcaseRef as React.RefObject<HTMLDivElement>} />
      <Feature />
      <Experience />
      <TechStack />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
