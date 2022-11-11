import React, { PointerEvent } from "react";

import { slidesMock } from "../mocks/slides";
import { Banner } from "./banner";

interface Iprops {
  width: number;
  move: number;
  currentIndex: number;
  widthItem: number;
  len: number;
  slide: (n: number, dir?: string, trigger?: string) => void;
}

export const Slides = ({
  width,
  move,
  slide,
  currentIndex,
  widthItem,
  len,
}: Iprops) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [currentMove, setCurrentMove] = React.useState(0);

  let clickX = 0;
  const downtTouch = (e: React.MouseEvent) => {
    clickX = e.pageX;
    window.addEventListener("pointermove", moveTouch);
  };

  const moveTouch = (e: MouseEvent) => {
    const drag = e.pageX - clickX;

    setCurrentMove(drag);

    if (currentIndex === 1 && drag > 20 && ref.current) {
      ref.current.style.transform = `translateX(${drag / 5}px)`;
      return;
    }

    if (currentIndex === len && drag < 20 && ref.current) {
      ref.current.style.transform = `translateX(-${
        width - widthItem + Math.abs(drag / 5)
      }px)`;
      return;
    }

    if (ref.current) {
      ref.current.style.transform = `translateX(-${move - drag}px)`;
    }
  };

  const mouseUp = () => {
    if (!currentMove) {
      window.removeEventListener("pointermove", moveTouch);
      return;
    }
    if (currentIndex === 1 && ref.current) {
      ref.current.style.transform = `translateX(0px)`;
    }

    if (currentIndex === len && ref.current) {
      ref.current.style.transform = `translateX(-${width - widthItem}px)`;
    }

    if (currentMove > 20 && currentIndex > 1) {
      slide(-1, "prev", "btn");
    }

    if (currentMove < 20 && currentIndex !== len) {
      slide(1, "next", "btn");
    }
    setCurrentMove(0);
    window.removeEventListener("pointermove", moveTouch);
  };
  return (
    <div
      ref={ref}
      onPointerDown={downtTouch}
      onPointerUp={mouseUp}
      className="slides"
      style={{
        display: "flex",
        width: width + "px",
        transform: `translateX(-${move}px)`,
        transition: `all 0.5s ease`,
      }}
    >
      {slidesMock.map((slide) => (
        <Banner banner={slide} key={slide.id} />
      ))}
    </div>
  );
};
