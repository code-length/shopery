export interface ProductType {
  id: number;
  categoriesId: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  popularTag: Array<string>;
  quantityInStock: number;
  brand: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
