export interface Imoks {
  id: number;
  img: string;
  title: string;
  weight: number;
  ingredients: string;
  price: number;
  status?: {
    new?: string;
    hit?: string;
  };
  info?: {
    hot?: {
      icon?: string;
      name?: "Острое";
    };
    vegatarian?: {
      icon?: string;
      name?: "Вегетарианские";
    };
    lactoseFree?: {
      icon?: string;
      name?: "Безлактозные";
    };
  };
}

export interface Islides {
  id: number;
  title: string;
  ingredients: string;
  price: number;
  img: string;
}

export interface Irolls extends Imoks {
  keyWord: string;
}
