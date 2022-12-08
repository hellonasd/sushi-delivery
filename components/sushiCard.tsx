import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import type { Imoks } from "../mocks/type";

interface IsushiCardProps {
  card: Imoks;
}

export const SushiCard = ({ card }: IsushiCardProps) => {
  const router = useRouter();
  const [path, setPath] = React.useState("");
  React.useEffect(() => {
    if (router.asPath.length < 2) {
      setPath(`${card.id}`);
    } else {
      setPath(`${router.asPath}/${card.id}`);
    }
  }, []);
  return (
    <Link href={`${path}`}>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__status">
            {card?.status?.hit && (
              <p className="card__hit">{card?.status?.hit}</p>
            )}
            {card.status?.new && (
              <p className="card__new">{card.status?.new}</p>
            )}
          </div>
          <img src={card.img} alt="" className="card__img" />

          <div className="card__bottom">
            <div className="card__info">
              <img src={card.info?.hot?.icon} alt="" className="card__hot" />
              <img
                src={card.info?.vegatarian?.icon}
                alt=""
                className="card__vegetarian"
              />
              <img
                src={card.info?.lactoseFree?.icon}
                alt=""
                className="card__lactose-free"
              />
            </div>
            <h3 className="card__name">{card.title}</h3>
            <p className="card__weight">Вес: {card.weight} г</p>
            <p className="card__ingredients">{card.ingredients}</p>
            <div className="card__add">
              <p className="card__price">
                {card.price} <span className="card__currency">Rub</span>
              </p>
              <div className="card__btns">
                <button className="card__btns-purple">
                  <img src="/purple.svg" alt="" className="card__icon-heart" />
                </button>
                <button className="card__btns-plus">
                  <img src="/plus.svg" alt="" className="card__icon-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
