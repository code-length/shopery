export interface ProductCreateDTO {
  name: string;
  price: number;
  description?: string;
  categoriesId: string[];
  rating: number;
  quantityInStock: number;
  brand?: string;
  img?: string;
}
