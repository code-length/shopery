import { FastifyInstance } from "fastify";
import { Product } from "../models/product.models";

export default async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/products", async (_, reply) => {
    const products = await Product.find();
    return reply.send(products);
  });

  fastify.get("/products/:id", async (request, reply) => {
    try {
      const product = await Product.findById((request.params as any).id);
      if (!product) return reply.status(404).send({ message: "Not Found" });
      return reply.send(product);
    } catch (error) {
      return reply.status(500).send(error);
    }
  });

  fastify.post("/products", async (request, reply) => {
    try {
      const product = new Product(request.body);
      await product.save();
      return reply.status(201).send(product);
    } catch (error) {
      return reply.status(500).send(error);
    }
  });

  fastify.put("/products/:id", async (request, reply) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        (request.params as any).id,
        request.body,
        { new: true }
      );
      if (!updatedProduct)
        return reply.status(404).send({ message: "Not Found" });
      return reply.send(updatedProduct);
    } catch (error) {
      return reply.status(500).send(error);
    }
  });

  fastify.delete("/products/:id", async (request, reply) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(
        (request.params as any).id
      );
      if (!deletedProduct)
        return reply.status(404).send({ message: "Not Found" });
      return reply.send({ message: "Deleted successfully" });
    } catch (error) {
      return reply.status(500).send(error);
    }
  });
}
