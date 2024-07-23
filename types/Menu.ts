type CategoryOutline = {
  name: string;
  description: string;
  slug: string;
  covers: string[];
};
type Category = CategoryOutline & {
  id: string;
  createdAt: Date;
  items: Item[];
};

type CategoryFromApi = CategoryOutline & {
  _id: string;
  _createdAt: Date;
  sections: Section[];
};

type Section = {
  _id: string;
  _createdAt: Date;
  name: { en: string; es: string };
  description: { en: string; es: string };
  slug: string;
  covers: string[];
  items: Item[];
};

type Item = {
  id: string;
  createdAt?: Date;
  name: { en: string; es: string };
  description: { en: string; es: string };
  price: number;
  slug?: string;
  covers?: string[];
  variants?: Variant[];
};

type Variant = {
  _id: string;
  _createdAt: Date;
  name: string;
  price: number;
};
