export interface OrderType {
  id: number;
  userId: number;
  totalPrice: number;
  status: OrderStatus;
  totalNumberOfProducts: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type OrderStatus = 'pending' | 'shipped' | 'delivered';
