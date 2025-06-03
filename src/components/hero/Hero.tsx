import { animatedWords } from "../../constants";
import Stats from "../stats/Stats";
import Button from "../ui/Button";
import HeroExperience from "./HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = ({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  const handleJumpToShowcase = () => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section id="hero" className="relative">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" />
      </div>
      <header className="flex h-screen w-screen flex-wrap justify-center p-10 lg:p-20">
        <div className="flex w-full flex-col justify-center gap-7 lg:w-[50%]">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {animatedWords.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center gap-1 pb-2 md:gap-3"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="bg-white-50 size-6 rounded-full p-1 md:p-2 lg:size-12"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
            <p className="text-white-50 pointer-events-none relative z-10 text-sm md:text-xl">
              Hi, I'm Dan, a frontend engineer from Vietnam with a passion for
              building websites.
            </p>
          </div>
          <Button
            className="h-12 w-60 md:h-16 md:w-80"
            img="/images/arrow-down.svg"
            onClick={handleJumpToShowcase}
          >
            See my work
          </Button>
        </div>
        <HeroExperience />
      </header>
      <Stats />
    </section>
  );
};

export default Hero;
