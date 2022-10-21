import React from "react";
import Image from "next/image";
import loc from "../public/loc.png";
import { Button } from "./button";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__left">
            <h3 className="banner__title">Филадельфия с лососем</h3>
            <p className="banner__sub-title">
              Нори, рис, японский майонез, бальзамик, трюфельная сальса,
              кунжутное масло
            </p>
            {/* <button className="banner__add-btn">
              <span className="banner__btn-decstop">В корзину</span>
              <span className="banner__btn-mobile">Заказать</span>
            </button> */}
            <div className="banner__btn">
              <Button cl="gray" title="В корзину" st="Заказать" />
            </div>
            <p className="banner__price">
              190 <span className="banner__currency">Rub</span>
            </p>
          </div>
          <div className="banner__right">
            <img src="/loc.png" alt="" className="banner__img" />
            <div className="banner__offer">Лучшее предложение недели!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
