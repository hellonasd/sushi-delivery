export interface Imoks {
  id: number;
  img: string;
  title: string;
  weight: number;
  ingredients: string;
  price: number;
  status: {
    new?: string;
    hit?: string;
  };
  info: {
    hot?: string;
    vegatarian?: string;
    lactoseFree?: string;
  };
}
