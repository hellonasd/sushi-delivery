import React from "react";

import { slidesMock } from "../mocks/slides";
import { Banner } from "./banner";

interface Iprops {
  width: number;
  move: number;
}

export const Slides = ({ width, move }: Iprops) => {
  return (
    <div
      className="slides"
      style={{
        display: "flex",
        width: width + "px",
        transform: `translateX(-${move}px)`,
        transition: `all 0.5s cubic-bezier(0.52, -0.45, 0.58, 1) 0s`,
      }}
    >
      {slidesMock.map((slide) => (
        <Banner banner={slide} key={slide.id} />
      ))}
    </div>
  );
};
