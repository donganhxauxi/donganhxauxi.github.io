import SectionHeader from "../ui/SectionHeader";
import { testimonials } from "../../constants";
import GlowCard from "../ui/GlowCard";

const Testimonial = () => {
  return (
    <section className="flex-center section-padding" id="testimonials">
      <div className="h-full w-full px-5 md:px-10">
        <SectionHeader
          title="What people say about me?"
          subTitle="Client Feedback Highlights"
        />
        <div className="mt-16 columns-1 md:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <GlowCard key={item.name} text={item.review}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={item.imgPath} className="rounded-full" />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white-50">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
