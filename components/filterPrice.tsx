import React from "react";

interface Iprops {
  changeFilterPrice: (c: string) => void;
}

export const FilterPrice = ({ changeFilterPrice }: Iprops) => {
  const [selected, setSelected] = React.useState("От дорогих к дешевым");

  const select = () => {
    setSelected((prev) => {
      if (prev === "От дорогих к дешевым") {
        return "От дешевых к дорогим";
      } else {
        return "От дорогих к дешевым";
      }
    });
    changeFilterPrice(selected);
  };

  return (
    <div className="filter-price">
      <div className="filter-price__wrapper">
        <button className="filter-price__btn" onClick={() => select()}>
          {selected}
          <img
            src="/arrow-cat.svg"
            alt="arrow"
            className={`filter-price__arrow ${
              selected === "От дешевых к дорогим"
                ? "filter-price__arrow--up"
                : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};
