import type { Irolls } from "../mocks/type";

export const filterRolls = (arr: Irolls[], f: string) => {
  return arr.filter((roll) => {
    if (f === "Все") {
      return roll;
    }

    if (roll.keyWord === f) {
      return roll;
    }
  });
};
