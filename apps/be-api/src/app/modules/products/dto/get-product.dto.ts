export class GetProductDTO {
  id: string;
  name: string;
  price: number;
  description: string;
  categoriesId: number;
  rating: number;
  quantityInStock: number;
  brand: string;
  img: string;

  constructor(data: Partial<GetProductDTO>) {
    Object.assign(this, data);
  }
}
