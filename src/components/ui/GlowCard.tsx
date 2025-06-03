import React, { useRef } from "react";

const GlowCard = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle + 60}`);
  };
  return (
    <div
      className="card card-border timeline-card mb-5 break-inside-avoid-column rounded-xl p-10"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="glow" />
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="/images/star.png" key={i} alt="stars" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{text}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
