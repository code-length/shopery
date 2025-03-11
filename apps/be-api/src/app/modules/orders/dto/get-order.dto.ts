export class GetOrdersDTO {
  id: string;
  userId: string;
  totalPrice: number;
  status: string;
  totalItems: number;

  constructor(data: Partial<GetOrdersDTO>) {
    Object.assign(this, data);
  }
}
