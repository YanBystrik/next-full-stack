import { Product, ProductItem, Ingredient } from '@prisma/client';

export type ProductWhitRelations = Product & {
  ingridients: Ingredient[];
  items: ProductItem[];
};
