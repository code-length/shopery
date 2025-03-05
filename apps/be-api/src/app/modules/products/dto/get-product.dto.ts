export class GetProductDTO {
  id: string;
  name: string;
  price: number;
  description: string;
  categoriesId: number;
  rating: number;
  popularTag: string[];
  quantityInStock: number;
  brand: string;
  img: string;

  constructor(data: Partial<GetProductDTO>) {
    Object.assign(this, data);
  }
}
