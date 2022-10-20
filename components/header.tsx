import React from "react";
import { Logo } from "../components/Logo";
import { Menu } from "./menu";

export const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] =
    React.useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />

          <nav className={`header__nav`}>
            <ul
              className={`header__list ${
                isOpenBurgerMenu ? "header__list-open" : ""
              }`}
            >
              <li className="header__item">Главная</li>
              <li className="header__item">Доставка</li>
              <li className="header__item">О нас</li>
              <li className="header__item">Новости</li>
            </ul>

            <a href="tel:799999999" className="header__phone">
              79999999999
            </a>

            <div className="header__btns">
              <button className="header__notification"></button>
              <button className="header__heart"></button>
              <button className="header__user"></button>
              <button className="header__basket">Корзина</button>
            </div>
            <div
              onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
              className={`burger-menu ${
                isOpenBurgerMenu ? "burger-menu-open" : "burger-menu-close"
              }`}
            >
              <span></span>
            </div>
          </nav>
          {isOpenBurgerMenu && <Menu open={isOpenBurgerMenu} />}
        </div>
      </div>
    </header>
  );
};
