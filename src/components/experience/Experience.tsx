import { workInfo } from "../../constants";
import GlowCard from "../ui/GlowCard";
import SectionHeader from "../ui/SectionHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card as HTMLDivElement, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card as HTMLDivElement,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text as HTMLDivElement, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text as HTMLDivElement,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <section
      id="experience"
      className="section-padding mt-20 w-full md:mt-40 xl:px-0"
    >
      <div className="h-full w-full px-5 md:px-20">
        <SectionHeader
          title="Professional Work Experience"
          subTitle="My Career Overview"
        />
        <div className="relative mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {workInfo.map((work) => (
              <div key={work.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard text={work.review}>
                    <img src={work.imgPath} alt={work.title} />
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line m-auto h-full w-1" />
                    </div>
                    <div className="expText relative z-20 flex gap-5 md:gap-10 xl:gap-20">
                      <div className="timeline-logo">
                        <img
                          src={work.logoPath}
                          alt="logo"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="">
                        <h1 className="text-3xl font-semibold">{work.title}</h1>
                        <p className="text-white-50 my-5">{work.date}</p>
                        <p className="text-[#839cb5] italic">{work.title}</p>
                        <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                          {work.responsibilities.map((res) => (
                            <li key={res}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
