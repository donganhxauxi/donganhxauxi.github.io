import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import MarqueeShowcase from "./MarqueeShowcase";

gsap.registerPlugin(ScrollTrigger);
const Showcase = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: { trigger: ref.current, start: "top bottom-=100" },
      },
    );
    [project1Ref.current, project2Ref.current, project3Ref.current].forEach(
      (proj, i) => {
        gsap.fromTo(
          proj,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3 * (i + 1),
            scrollTrigger: { trigger: proj, start: "top bottom-=100" },
          },
        );
      },
    );
  }, []);
  return (
    <>
      <div ref={ref} className="app-showcase px-10 lg:px-20" id="work">
        <div className="w-full">
          <div className="showcaselayout">
            <div
              className="first-project-wrapper justify-start"
              ref={project1Ref}
            >
              <img
                src="/images/project1.webp"
                alt="axie-marketplace"
                className="rounded-xl"
              />
              <div className="text-content">
                <h2>
                  App.Axie is a central hub for the Axie Infinity community,
                  offering tools and features to enhance gameplay and user
                  experience.
                </h2>
                <p className="text-white-50 md:text-xl">
                  Powered by Next, Sass and GraphQL for a blazingly fast and
                  user-friendly experience.
                </p>
              </div>
            </div>
            <div className="project-list-wrapper overflow-hidden">
              <div ref={project2Ref} className="flex-1">
                <img
                  src="/images/project2.jpg"
                  alt="venues management system"
                  className="w-full"
                />

                <div className="text-content">
                  <h2>Venues management system</h2>
                </div>
              </div>
              <div ref={project3Ref} className="flex-1">
                <img
                  src="/images/project3.png"
                  alt="venues management system"
                />
                <div className="text-content">
                  <h2>
                    Ronin Block Explorer is an app that allows users to view
                    real-time blockchain data, such as transactions, blocks,
                    addresses, contracts, and tokens
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeShowcase />
    </>
  );
};

export default Showcase;
