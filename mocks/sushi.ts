import type { Imoks } from "./type";

export enum info {
  HOT = "/hot.svg",
  VEGETARIAN = "/vegan.svg",
  LACTOSEFREE = "/lactose.svg",
}

enum status {
  HIT = "Hit",
  NEW = "New",
}

export const mocksData: Imoks[] = [
  {
    id: 1,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {
      hot: {
        icon: info.HOT,
      },
      vegatarian: {
        icon: info.VEGETARIAN,
      },
      lactoseFree: {
        icon: info.LACTOSEFREE,
      },
    },

    status: {
      hit: status.HIT,
      new: status.NEW,
    },
  },
  {
    id: 2,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {},

    status: {},
  },
  {
    id: 3,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {
      hot: {
        icon: info.HOT,
      },
    },

    status: {
      new: status.NEW,
    },
  },
  {
    id: 4,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {},

    status: {},
  },
  {
    id: 5,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {},

    status: {},
  },
  {
    id: 6,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {
      hot: {
        icon: info.HOT,
      },
      vegatarian: {
        icon: info.VEGETARIAN,
      },
      lactoseFree: {
        icon: info.LACTOSEFREE,
      },
    },

    status: {
      hit: status.HIT,
      new: status.NEW,
    },
  },
  {
    id: 7,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {
      hot: {
        icon: info.HOT,
      },
      vegatarian: {
        icon: info.VEGETARIAN,
      },
      lactoseFree: {
        icon: info.LACTOSEFREE,
      },
    },

    status: {
      hit: status.HIT,
      new: status.NEW,
    },
  },
  {
    id: 8,
    img: "/a.png",
    title: "Гункан Лосось",
    weight: 40,
    price: 190,
    ingredients:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    info: {
      hot: {
        icon: info.HOT,
      },
      vegatarian: {
        icon: info.VEGETARIAN,
      },
      lactoseFree: {
        icon: info.LACTOSEFREE,
      },
    },

    status: {
      hit: status.HIT,
      new: status.NEW,
    },
  },
];
