import { logos } from "../../constants";

const MarqueeShowcase = () => {
  return (
    <div className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box gap-5 md:gap-12">
          {logos.map((logo) => (
            <div key={logo} className="flex-center marquee-item flex-none">
              <img src={logo} />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo} className="flex-center marquee-item flex-none">
              <img src={logo} />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo} className="flex-center marquee-item flex-none">
              <img src={logo} />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo} className="flex-center marquee-item flex-none">
              <img src={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeShowcase;
