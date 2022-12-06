import React from "react";

interface Iingredinets {
  icon: string;
  name: string;
}

interface Iprops {
  pickIngredients: (name: string) => void;
  mobile?: boolean;
  ingredien: string;
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

export const Ingredients = ({ pickIngredients, mobile, ingredien }: Iprops) => {
  const [hidden, setHidden] = React.useState(true);

  const pick = (i: number, name: string) => {
    const nameIngredient = name.toLowerCase();
    const index = ingredien.indexOf(nameIngredient);

    if (ingredien && index >= 0) {
      const str = ingredien
        .split(nameIngredient)
        .join(" ")
        .replace(/^ +| +$|( ) +/g, "$1");
      pickIngredients(str);
    } else if (ingredien.length) {
      pickIngredients(`${ingredien} ${nameIngredient}`);
    } else {
      pickIngredients(nameIngredient);
    }
  };

  const clearIngredients = () => {
    pickIngredients("");
  };

  const classActive = (name: string): boolean => {
    if (!ingredien.length) {
      return false;
    } else if (ingredien.indexOf(name.toLocaleLowerCase()) >= 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log("ingredien", ingredien);
  return (
    <div className="ingredients">
      <div className="ingredients__wrapper">
        <div className="ingredients__prev">
          <ul className="ingredients__items">
            {!mobile &&
              ingredients.slice(0, 3).map((ing, i) => {
                return (
                  <li
                    onClick={() => {
                      pick(i, ing.name);
                    }}
                    key={ing.name}
                    className={`ingredients__item ${
                      classActive(ing.name) ? "ingredients__item--pick" : ""
                    }`}
                  >
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
            <span className="ingredients__btn-name">Фильтры</span>
            <span className="ingredients__rect"></span>
          </button>
        </div>
        <div hidden={!mobile && hidden} className="ingredients__top">
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
                  }}
                  key={ing.name}
                  className={`ingredients__item ${
                    classActive(ing.name) ? "ingredients__item--pick" : ""
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
