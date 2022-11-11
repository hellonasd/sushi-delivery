import Link from "next/link";

import React, { PointerEvent } from "react";

interface IMenu {
  open?: boolean;
}

export const Menu: React.FC<IMenu> = ({ open }) => {
  const ulRef = React.useRef<HTMLUListElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  let startX = 0;
  let x = -0;
  let clickX = 0;
  let width = 0;
  const startDrag = (e: MouseEvent) => {
    const { current } = ulRef;

    width = current?.offsetWidth! - wrapRef?.current?.offsetWidth! + 32;
    const drag = e.pageX - clickX;

    let shift = drag / 5;

    x = Math.max(Math.min(startX + drag, shift), -width + shift);

    if (current) {
      // if (-width >= x) {
      //   current.style.transform = `translateX(-${width - Math.abs(x)}px)`;
      // }
      current.style.transform = `translateX(${x}px)`;
    }
  };
  const down = (e: PointerEvent<HTMLElement>) => {
    clickX = e.pageX;
    startX = x;

    window.addEventListener("pointermove", startDrag);
  };

  const up = (e: PointerEvent<HTMLUListElement>) => {
    const { current } = ulRef;

    if (-width >= x) {
      let del = Math.abs(x) - width;
      const diff = -(Math.abs(x) - del);
      current!.style.transform = `translateX(${diff}px)`;
      x = diff;
    }

    if (x >= 1) {
      current!.style.transform = `translateX(0px)`;
      x = 0;
    }
    window.removeEventListener("pointermove", startDrag);
  };

  return (
    <div className={`menu ${open ? "mobile" : "dc"}`}>
      <div className="menu__wrapper" ref={wrapRef}>
        <ul
          ref={ulRef}
          className={`menu__list`}
          onPointerDown={down}
          onPointerUp={up}
        >
          <li className="menu__item">
            <Link href="/rolls">
              <a>
                <img src="/rol.svg" alt="" className="menu__img" />
                <p className="menu__name">Роллы</p>
              </a>
            </Link>
          </li>

          <li className="menu__item">
            <a>
              <img src="/sushi.svg" alt="" className="menu__img" />
              <p className="menu__name">Суши</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/sets.svg" alt="" className="menu__img" />
              <p className="menu__name">Сеты</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/bowls.svg" alt="" className="menu__img" />

              <p className="menu__name">Боулы</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/drinks.svg" alt="" className="menu__img" />

              <p className="menu__name">Напитки</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/sauces.svg" alt="" className="menu__img" />
              <p className="menu__name">Соусы</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/unknow.svg" alt="" className="menu__img" />
              <p className="menu__name">Неизв...</p>
            </a>
          </li>
          <li className="menu__item">
            <a>
              <img src="/unknow.svg" alt="" className="menu__img" />
              <p className="menu__name">Неизв...</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
