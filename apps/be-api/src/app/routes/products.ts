import { FastifyInstance } from 'fastify';
import { Product } from '../models/product.models';
import { ObjectId } from 'mongodb';

export default async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/products', async (_, reply) => {
    const products = await Product.find();
    return reply.send(products);
  });

  fastify.get(
    '/products/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' }, // Validate as MongoDB ObjectId
          },
          required: ['id'],
        },
      },
    },
    async (request, reply) => {
      try {
        const { id } = request.params;

        if (!ObjectId.isValid(id)) {
          return reply.status(400).send({ message: 'Invalid ID format' });
        }

        const product = await Product.findById(id);
        if (!product) return reply.status(404).send({ message: 'Not Found' });

        return reply.send(product);
      } catch (error) {
        return reply.status(500).send({ message: 'Server error', error });
      }
    }
  );

  fastify.post(
    '/products',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            price: { type: 'number' },
            description: { type: 'string' },
            vategories: { type: 'number' },
            rating: { type: 'number' },
            popularTag: { type: 'array' },
            quantityInStock: { type: 'number' },
            brand: { type: 'string' },
            img: { type: 'string' },
          },
          required: [
            'name',
            'price',
            'categoriesId',
            'rating',
            'popularTag',
            'quantityInStock',
          ],
        },
      },
    },
    async (request, reply) => {
      try {
        const product = new Product(request.body);
        await product.save();
        return reply.status(201).send(product);
      } catch (error) {
        return reply.status(500).send(error);
      }
    }
  );

  fastify.put(
    '/products/:id',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            price: { type: 'number' },
            description: { type: 'string' },
            vategories: { type: 'number' },
            rating: { type: 'number' },
            popularTag: { type: 'array' },
            quantityInStock: { type: 'number' },
            brand: { type: 'string' },
            img: { type: 'string' },
          },
          required: [
            'name',
            'price',
            'categoriesId',
            'rating',
            'popularTag',
            'quantityInStock',
          ],
        },
      },
    },
    async (request, reply) => {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          (request.params as any).id,
          request.body,
          { new: true }
        );
        if (!updatedProduct)
          return reply.status(404).send({ message: 'Not Found' });
        return reply.send(updatedProduct);
      } catch (error) {
        return reply.status(500).send(error);
      }
    }
  );

  fastify.delete('/products/:id', async (request, reply) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(
        (request.params as any).id
      );
      if (!deletedProduct)
        return reply.status(404).send({ message: 'Not Found' });
      return reply.send({ message: 'Deleted successfully' });
    } catch (error) {
      return reply.status(500).send(error);
    }
  });
}
