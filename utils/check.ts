import { Irolls } from "../mocks/type";

interface IFilterMap {
  filters: {
    category: string;
    additive: string;
    ingredients: string;
  };
  rollsMock: Irolls[];
}

export const check = ({
  filters: { category, additive, ingredients },
  rollsMock,
}: IFilterMap) => {
  let c: Irolls[] = [];
  let a: Irolls[] = [];
  let i: Irolls[] = [];
  console.log("addtive", additive);
  if (category) {
    c = filterCategory(category, rollsMock);
  }

  if (additive) {
    a = filterAdditives(additive, c);
  }

  if (a.length > 0 && ingredients.length) {
    i = filterIngredients(ingredients, a);
  } else {
    i = filterIngredients(ingredients, c);
  }

  return additive.length && ingredients.length
    ? i
    : additive.length
    ? a
    : ingredients.length
    ? i
    : c;
};

const filterCategory = (category: string, rolls: Irolls[]) => {
  if (category === "Все") {
    return rolls;
  }
  return rolls.filter((r) => r.keyWord === category);
};

export const filterAdditives = (additive: string, rolls: Irolls[]) => {
  return rolls.filter((r) => r.info?.hot?.name === additive);
};

export const filterIngredients = (ingredients: string, rolls: Irolls[]) => {
  return rolls.filter((r) => {
    if (ingredients) {
      if (r.ingredients.toLocaleLowerCase().includes(ingredients)) {
        return r;
      }
    }
  });
};
