import { useEffect, useRef } from "react";

const style = `
  .petal-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    background: #120a18;
  }

  .petal {
    position: absolute;
    top: -20px;
    width: 12px;
    height: 18px;
    border-radius: 60% 40% 60% 40%;
    opacity: 0.7;
    animation: fall linear infinite;
  }

  @keyframes fall {
    0%   { transform: translateY(-20px) rotate(0deg);   opacity: 0.7; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
`;

export default function StarryBg() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const colors = ["#f4a7b9", "#e8829a", "#f9c4d0", "#d4a0c0"];

    // Create 40 petals
    for (let i = 0; i < 40; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";

      petal.style.left        = Math.random() * 100 + "%";
      petal.style.width       = (Math.random() * 8 + 6) + "px";
      petal.style.height      = (Math.random() * 10 + 8) + "px";
      petal.style.background  = colors[Math.floor(Math.random() * colors.length)];
      petal.style.animationDuration  = (Math.random() * 5 + 4) + "s";
      petal.style.animationDelay     = (Math.random() * 6) + "s";

      container.appendChild(petal);
    }

    return () => { container.innerHTML = ""; };
  }, []);

  return (
    <>
      <style>{style}</style>
      <div className="petal-bg" ref={containerRef} />
    </>
  );
}
