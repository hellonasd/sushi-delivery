import { Irolls } from "../mocks/type";
import { filterRolls } from "./filterRolls";

interface Ifilter {
  additive?: string;
  category?: string;
}

export const f = (filters: Ifilter, arr: Irolls[]) => {
  return arr.filter((item, i) => {
    if (filters.additive && filters.category) {
      if (
        filters.additive === item.info?.hot?.name &&
        filters.category === item.keyWord
      ) {
        return item;
      } else if (
        filters.category === "Все" &&
        filters.additive === item.info?.hot?.name
      ) {
        return item;
      }
      return;
    }

    if (!filters.additive && !filters.category) {
      return item;
    }

    if (filters.category === "Все") {
      return item;
    }

    if (filters.category === item.keyWord) {
      return item;
    }

    if (filters.additive && filters.additive === item.info?.hot?.name) {
      return item;
    }
  });
};
