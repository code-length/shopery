import { OrderCreateDTO, OrderUpdateDTO } from '../dto';
import { Order } from '../models';

export class OrderService {
  async findAll() {
    return await Order.find().lean();
  }

  async findById(id: string) {
    const order = await Order.findById(id).lean();
    return order;
  }

  async create(orderData: OrderCreateDTO) {
    const order = new Order(orderData);
    return await order.save();
  }

  async update(id: string, orderData: OrderUpdateDTO) {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: orderData },
      { new: true, runValidators: true }
    );

    return updatedOrder;
  }

  async delete(id: string) {
    return await Order.findByIdAndDelete(id);
  }
}
