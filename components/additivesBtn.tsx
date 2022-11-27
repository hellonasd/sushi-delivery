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

  const changeAdditive = (name: string, id: number) => {
    if (active !== id) {
      additive(name);
      setActive(id);
      setClicked(true);
      return;
    }
    if (active === id && clicked) {
      additive("");
      setActive(-1);
      setClicked(false);
    }
  };

  return (
    <>
      <div className="additives">
        {btn.map((b, i) => {
          return (
            <button
              key={b.name}
              onClick={() => changeAdditive(b.name, b.id)}
              className={`additives__btn ${
                active === i + 1 ? "additives__btn--active" : ""
              }`}
            >
              <img src={b.src} alt="" className="additives__img" />
              <span className="additives__name">{b.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
