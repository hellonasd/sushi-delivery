import React from "react";

interface Ilist {
  id: number;
  name: string;
}

interface Iprops {
  changeCategory: (c: string) => void;
  categoryName: string;
}

const list: Ilist[] = [
  {
    id: 1,
    name: "Все",
  },
  {
    id: 2,
    name: "Классические",
  },
  {
    id: 3,
    name: "Маки",
  },
  {
    id: 4,
    name: "Драконы",
  },
  {
    id: 5,
    name: "Запеченные",
  },
  {
    id: 6,
    name: "Сладкие",
  },
];

export const Category = ({ changeCategory, categoryName }: Iprops) => {
  return (
    <div className="category">
      <div className="category__wrapper">
        <ul className="category__list">
          {list.map((category, i) => {
            return (
              <li
                onClick={() => changeCategory(category.name)}
                key={category.id}
                className={`category__item ${
                  categoryName === category.name ? "category__item--active" : ""
                }`}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
