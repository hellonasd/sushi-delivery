import React from "react";

interface IProps {
  children: React.ReactNode[];
  closeFilter: () => void;
}

export const Filters = ({ children, closeFilter }: IProps) => {
  return (
    <div className="filters">
      <div className="filters__wrapper">
        <header className="filters__header">
          <div className="filters__title">Фильтры</div>
          <button className="filters__close-btn" onClick={closeFilter}>
            X
          </button>
        </header>
        <div className="filters__category">
          <span className="filters__name">Категория</span>
          {children[0]}
        </div>

        <div className="filters__additive">
          <span className="filters__name">Вид суши</span>
          {children[1]}
        </div>

        <div className="filters__ingredients">
          <span className="filters__name">Ингридиенты</span>
          {children[2]}
        </div>
      </div>
    </div>
  );
};
