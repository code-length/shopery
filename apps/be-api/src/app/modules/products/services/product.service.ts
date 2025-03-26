import { ProductCreateDTO, ProductUpdateDTO } from '../dto';
import { Product } from '../models';

export class ProductService {
  async findAll() {
    return await Product.find().lean();
  }

  async findById(id: string) {
    const product = await Product.findById(id).lean();

    return product;
  }

  async create(productData: ProductCreateDTO) {
    const product = new Product(productData);

    return await product.save();
  }

  async update(id: string, productData: ProductUpdateDTO) {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: productData },
      { new: true, runValidators: true }
    );

    return updatedProduct;
  }

  async delete(id: string) {
    return await Product.findByIdAndDelete(id);
  }
}
