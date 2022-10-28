import React, { PointerEvent } from "react";
import { Dots } from "./dots";
import { Slides } from "./Slides";

import { slidesMock } from "../mocks/slides";
import { Arrow } from "./arrow";

export const Slider = () => {
  const wrapp = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState<number>();
  const [move, setMove] = React.useState<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);
  const [animation, setAnimation] = React.useState<boolean>(false);
  const [widthItem, setWidthItem] = React.useState<number>(0);
  React.useEffect(() => {
    const width =
      wrapp.current?.getBoundingClientRect().width! * slidesMock.length;
    setWidth(width);
    setWidthItem(wrapp.current?.getBoundingClientRect().width!);
  }, []);

  const nextSlide = () => {
    if (currentIndex === slidesMock.length) {
      return;
    }
    if (wrapp.current) {
      window.addEventListener("transitionstart", () => {
        setAnimation(true);
      });

      setCurrentIndex((prev) => prev + 1);

      setMove(wrapp.current.getBoundingClientRect().width * currentIndex);
      window.addEventListener("transitionend", () => {
        setAnimation(false);
      });
    }
  };

  const prevSlide = () => {
    if (currentIndex === 1) {
      return;
    }
    if (wrapp.current) {
      window.addEventListener("transitionstart", () => {
        setAnimation(true);
      });
      setCurrentIndex((prev) => prev - 1);
      setMove(move - wrapp.current.getBoundingClientRect().width);
      window.addEventListener("transitionend", () => {
        setAnimation(false);
      });
    }
  };

  const slide = (n: number, dir?: string, trigger?: string) => {
    const direction = dir ? dir : n > currentIndex ? "next" : "prev";

    // if (animation) {
    //   return;
    // }
    if (trigger) {
      if (direction === "next" && wrapp.current) {
        nextSlide();
        return;
      }

      if (direction === "prev" && wrapp.current) {
        prevSlide();
        return;
      }
    }
    setCurrentIndex(n);
    if (wrapp.current) {
      setMove(wrapp.current.getBoundingClientRect().width * (n - 1));
    }
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider__wrapp" ref={wrapp}>
          {width && (
            <Slides
              width={width}
              move={move}
              slide={slide}
              widthItem={widthItem}
              currentIndex={currentIndex}
              len={slidesMock.length}
            />
          )}
          <Dots
            len={slidesMock.length}
            activeSlide={currentIndex}
            slide={slide}
          />

          <Arrow slide={slide} />
        </div>
      </div>
    </div>
  );
};
