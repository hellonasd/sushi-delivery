import React from "react";

interface Iprops {
  len: number;
  activeSlide: number;
  slide: (n: number, dir?: string, trigger?: string) => void;
}

export const Dots = ({ len, activeSlide, slide }: Iprops) => {
  const renderDots = () => {
    const dots = [];

    for (let i = 1; i <= len; i++) {
      dots.push(
        <button
          key={i}
          className={`dots__dot ${activeSlide === i ? "active" : ""}`}
          onClick={() => slide(i)}
        ></button>
      );
    }
    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
};
