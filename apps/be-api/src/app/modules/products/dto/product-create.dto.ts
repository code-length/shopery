export interface ProductCreateDTO {
  name: string;
  price: number;
  description?: string;
  categoriesId: number;
  rating: number;
  popularTag: string[];
  quantityInStock: number;
  brand?: string;
  img?: string;
}
