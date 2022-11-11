import React from "react";
import { SushiCard } from "./sushiCard";
import { Button } from "./button";
// import { mocksData } from "../mocks/sushi";
import { Imoks } from "../mocks/type";
import Link from "next/link";

interface Iprops<T> {
  mocksData: T[];
  title?: string;
  showBtn?: boolean;
}

export const Product = <T extends Imoks>({
  mocksData,
  title,
  showBtn = true,
}: Iprops<T>) => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__inner">
          <div className="product__wrapper">
            {title && <h3 className="product__title">{title}</h3>}
            {showBtn && (
              <div className="product__btn">
                <Button title={"смотреть все"} st={"смотреть все позиции"} />
              </div>
            )}

            {mocksData.map((card) => {
              return <SushiCard key={card.id} card={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
