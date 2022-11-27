import React from "react";

import { AdditivesBtn } from "../../components/additivesBtn";
import { BreadCrumbs } from "../../components/breadCrumbs";

import { Category } from "../../components/category";
import { FilterPrice } from "../../components/filterPrice";

import { Product } from "../../components/product";

import { rollsMock } from "../../mocks/rolls";

import { Ingredients } from "../../components/Ingredients";
import { check } from "../../utils/check";
import { Filters } from "../../components/filters";

interface IFilter {
  category: string;
  additive: string;
  ingredients: string;
}

function Rolls() {
  const [items, setItems] = React.useState(rollsMock);
  const [filters, setFilters] = React.useState<IFilter>({
    ingredients: "",
    category: "Все",
    additive: "",
  });
  const [filterMenuIsOpen, setFilterMenuIsOpen] = React.useState(false);

  const changeCategory = (c: string) => {
    setFilters({
      ...filters,
      category: c,
    });
  };

  const changeFilterPrice = (c: string) => {
    setItems(
      [...items].sort((a, b) =>
        c === "От дорогих к дешевым" ? a.price - b.price : b.price - a.price
      )
    );
  };

  const additive = (c: string) => {
    setFilters({
      ...filters,
      additive: c,
    });
  };

  const pickIngredients = (name: { i: number; name: string }) => {
    let ingredients = [...Object.values(name)].join(" ").toLocaleLowerCase();

    setFilters({
      ...filters,
      ingredients,
    });
  };

  React.useEffect(() => {
    setItems(check({ filters, rollsMock }));
  }, [filters]);

  return (
    <div className="rolls">
      <div className="container">
        <BreadCrumbs />

        <div className="rolls__wrapper">
          <div className="rolls__category">
            <Category changeCategory={changeCategory} />
            <FilterPrice changeFilterPrice={changeFilterPrice} />
          </div>
          <div className="rolls__additives">
            <AdditivesBtn additive={additive} />
            <Ingredients pickIngredients={pickIngredients} />
          </div>
        </div>

        {filterMenuIsOpen && (
          <div className="rolls__filters">
            <Filters closeFilter={() => setFilterMenuIsOpen(!filterMenuIsOpen)}>
              <div className="rolls__category">
                <Category changeCategory={changeCategory} />
              </div>
              <div className="rolls__additives">
                <AdditivesBtn additive={additive} />
                <Ingredients pickIngredients={pickIngredients} />
              </div>
            </Filters>
          </div>
        )}

        <div className="rolls__mobile-btn">
          <button
            onClick={() => setFilterMenuIsOpen(!filterMenuIsOpen)}
            className="rolls__filter-btn"
          >
            Фильтры
          </button>
          <FilterPrice changeFilterPrice={changeFilterPrice} />
        </div>

        <Product mocksData={items} showBtn={false} />
      </div>
    </div>
  );
}

export default Rolls;
