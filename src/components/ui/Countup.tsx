import { RefObject, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "motion/react";

const Countup = ({ text, end }: { text: string; end: number }) => {
  const countUpRef = useRef<HTMLElement>(null);
  const isInView = useInView(countUpRef);
  const { start } = useCountUp({
    ref: countUpRef as RefObject<HTMLElement>,
    end,
    suffix: "+",
    delay: 0.1,
  });

  useEffect(() => {
    start();
  }, [isInView]);

  return (
    <div className="rounded-lg bg-zinc-900 p-10">
      <div
        className="counter-number mb-2 text-5xl font-bold text-white"
        ref={countUpRef as RefObject<HTMLDivElement>}
      />
      <div className="text-white-50 text-lg">{text}</div>
    </div>
  );
};

export default Countup;
