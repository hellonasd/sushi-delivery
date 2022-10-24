import React from "react";
import type { Islides } from "../mocks/type";
import { Button } from "./button";

interface Iprops {
  banner: Islides;
}

export const Banner = ({ banner }: Iprops) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__inner">
          <div className="banner__wrapper">
            <div className="banner__left">
              <h3 className="banner__title">{banner.title}</h3>
              <p className="banner__sub-title">{banner.ingredients}</p>
              <div className="banner__group">
                <div className="banner__btn">
                  <Button title="В корзину" st="Заказать" cl="gray" />
                </div>
                <p className="banner__price">
                  {banner.price} <span className="banner__currency">Rub</span>
                </p>
              </div>
            </div>
            <div className="banner__right">
              <img src={banner.img} alt="" className="banner__img" />
              <div className="banner__offer">Лучшее предложение недели!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
