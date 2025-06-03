import { techStack } from "../../constants";
import Icon3d from "../ui/Icon3d";
import SectionHeader from "../ui/SectionHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: "#skills", start: "top center" },
      },
    );
  }, []);
  return (
    <section id="skills" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <SectionHeader
          title="My tech stack"
          subTitle="What I bring to the table"
        />
        <div className="tech-grid">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="card-border tech-card group relative overflow-hidden rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Icon3d model={item} />
                </div>
                <div className="padding-x w-full">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
