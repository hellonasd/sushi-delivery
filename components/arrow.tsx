import React from "react";

interface Iprops {
  slide: (n: number, dir?: string, trigger?: string) => void;
}

export const Arrow: React.FC<Iprops> = ({ slide }) => {
  return (
    <div className="arrow">
      <button className="arrow__left" onClick={() => slide(-1, "prev", "btn")}>
        <img src="/arrow.png" alt="" className="arrow__img-left" />
      </button>
      <button className="arrow__right" onClick={() => slide(1, "next", "btn")}>
        <img src="/arrow.png" alt="" className="arrow__img-right" />
      </button>
    </div>
  );
};
