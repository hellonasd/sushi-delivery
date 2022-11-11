import React from "react";

interface Iprops {
  additive: (c: string) => void;
}

interface btn {
  name: string;
  src: string;
  id: number;
}

const btn: btn[] = [
  { name: "Острое", src: "hot.svg", id: 1 },
  { name: "Вегетарианские", src: "vegan.svg", id: 2 },
  { name: "Безлактозные", src: "lactose.svg", id: 3 },
];

export const AdditivesBtn = ({ additive }: Iprops) => {
  const [active, setActive] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
      {btn.map((b, i) => {
        return (
          <button
            key={b.name}
            onClick={() => {
              if (!clicked) {
                additive(b.name);
              } else {
                additive("");
              }

              setActive(b.id);
              setClicked(!clicked);
            }}
            className={`additivesbtn ${
              active === i + 1 && clicked ? "additivesbtn--active" : ""
            }`}
          >
            <img src={b.src} alt="" className="additivesbtn__img" />
            <span className="additivesbtn__name">{b.name}</span>
          </button>
        );
      })}
    </>
  );
};
