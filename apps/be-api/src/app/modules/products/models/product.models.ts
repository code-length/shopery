import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    categoriesId: { type: Number, required: true },
    rating: { type: Number, required: true },
    popularTag: { type: Array, required: true },
    quantityInStock: { type: Number, required: true },
    brand: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', ProductSchema);
