import { info } from "console";
import React, { ReactPropTypes, useCallback } from "react";

import { AdditivesBtn } from "../../components/additivesBtn";
import { BreadCrumbs } from "../../components/breadCrumbs";

import { Category } from "../../components/category";
import { FilterPrice } from "../../components/filterPrice";

import { Product } from "../../components/product";

import { rollsMock } from "../../mocks/rolls";

import { f } from "../../utils/filter";

import { Ingredients } from "../../components/Ingredients";

interface IFilter {
  category?: string;
  additive?: string;
}

function Rolls() {
  const [items, setItems] = React.useState(rollsMock);
  const [filters, setFilters] = React.useState<IFilter>({});
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

  const pickIngredients = (name: string) => {
    console.log("name", name);
  };

  React.useEffect(() => {
    if (Object.values(filters).length > 0) {
      setItems(f(filters, rollsMock));
    }
  }, [filters]);

  return (
    <div className="rolls">
      <div className="container">
        <BreadCrumbs />
        <div className="rolls__category">
          <Category changeCategory={changeCategory} />
          <FilterPrice changeFilterPrice={changeFilterPrice} />
        </div>
        {/* <Additives /> */}
        <div className="rolls__additives">
          <AdditivesBtn additive={additive} />
          <Ingredients pickIngredients={pickIngredients} />
        </div>
        <Product mocksData={items} showBtn={false} />
      </div>
    </div>
  );
}

export default Rolls;
