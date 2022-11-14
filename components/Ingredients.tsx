import React from "react";

interface Iingredinets {
  icon: string;
  name: string;
}

interface Iprops {
  pickIngredients: (name: string) => void;
}

const ingredients: Iingredinets[] = [
  {
    icon: "/ingredients/salmon.png",
    name: "Лосось",
  },
  {
    icon: "/ingredients/eel.png",
    name: "Угорь",
  },
  {
    icon: "/ingredients/tuna.png",
    name: "Тунец",
  },
  {
    icon: "/ingredients/chicken.png",
    name: "Куриное филе",
  },
  {
    icon: "/ingredients/tofu.png",
    name: "Тофу",
  },
  {
    icon: "/ingredients/creamCheese.png",
    name: "Сливочный сыр",
  },
  {
    icon: "/ingredients/avocado.png",
    name: "Авокадо",
  },
  {
    icon: "/ingredients/tomato.png",
    name: "Помидор",
  },
  {
    icon: "/ingredients/shiitake.png",
    name: "Гриб шитаки",
  },
];

export const Ingredients = ({ pickIngredients }: Iprops) => {
  const [hidden, setHidden] = React.useState(true);
  const [item, setItem] = React.useState<{ [key: number]: string }>({});
  const pick = (i: number, name: string) => {
    let ingredient: { [k: number]: string } = {};
    ingredient[i] = name;

    setItem({ ...item, ...ingredient });
  };

  const clearIngredients = () => {
    setItem({});
  };
  return (
    <div className="ingredients">
      <div className="ingredients__wrapper">
        <div className="ingredients__prev">
          <ul className="ingredients__items">
            {ingredients.slice(0, 3).map((ing) => {
              return (
                <li key={ing.name} className="ingredients__view">
                  <img src={ing.icon} alt="" className="ingredients__icon" />
                  <span className="ingredients__name">{ing.name}</span>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setHidden(false)}
            className="ingredients__open-menu"
          >
            <span className="ingredients__rect"></span>
          </button>
        </div>
        <div hidden={hidden} className="ingredients__top">
          <header className="ingredients__header">
            <h3 className="ingredients__title">Ингредиенты</h3>
            <div className="ingredients__btns">
              <button className="ingredients__clear" onClick={clearIngredients}>
                Сбросить все
              </button>
              <button
                onClick={() => setHidden(true)}
                className="ingredients__close"
              >
                X
              </button>
            </div>
          </header>
          <ul className="ingredients__list">
            {ingredients.map((ing, i) => {
              return (
                <li
                  onClick={() => {
                    pick(i, ing.name);
                    pickIngredients(ing.name);
                  }}
                  key={ing.name}
                  className={`ingredients__item ${
                    item[i] === ing.name ? "ingredients__item--pick" : ""
                  }`}
                >
                  <img src={ing.icon} alt="" className="ingredients__icon" />
                  <span className="ingredients__name">{ing.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
