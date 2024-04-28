type CategoryOutline = {
  name: string;
  description: string;
  slug: string;
  cover: string;
};
type Category = CategoryOutline & {
  id: string;
  createdAt: Date;
  sections: Section[];
};

type CategoryFromApi = CategoryOutline & {
  _id: string;
  _createdAt: Date;
  sections: Section[];
};

type Section = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  slug: string;
  cover: string;
  items: Item[];
};

type Item = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  price: number;
  slug: string;
  cover: string;
  variants?: Variant[];
};

type Variant = {
  _id: string;
  _createdAt: Date;
  name: string;
  price: number;
};
