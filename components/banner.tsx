import React from "react";
import Image from "next/image";
import loc from "../public/loc.png";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__left">
          <h3 className="banner__title">Филадельфия с лососем</h3>
          <p className="banner__sub-title">
            Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное
            масло
          </p>
          <button className="banner__add-btn"></button>
          <p className="banner__price">
            190 <span className="banner__currency">Rub</span>
          </p>
        </div>
        <div className="banner__right">
          <Image src={loc} width={917} height={513} />
        </div>
      </div>
    </div>
  );
};
