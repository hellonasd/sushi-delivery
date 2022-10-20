import React from "react";
import { SushiCard } from "./sushiCard";
import { Button } from "./button";
// import { mocksData } from "../mocks/sushi";
import { Imoks } from "../mocks/type";

interface Iprops {
  mocksData: Imoks[];
  title: string;
}

export const Product: React.FC<Iprops> = ({ mocksData, title }) => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__inner">
          <div className="product__wrapper">
            <h3 className="product__title">{title}</h3>
            <div className="product__btn">
              <Button title={"смотреть все"} />
              <Button cl="mobile" title={"смотреть все позиции"} />
            </div>
            {mocksData.map((card) => {
              return <SushiCard key={card.id} card={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
