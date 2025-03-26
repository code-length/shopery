import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { idParamSchema } from '../../../shared/validations';
import { ProductCreateDTO, ProductUpdateDTO } from '../dto';
import { ProductService } from '../services';
import { productSchema } from '../validations';

interface ProductParams {
  id: string;
}

export async function productAdminRoutes(fastify: FastifyInstance) {
  const productService = new ProductService();

  fastify.get(
    '/products',
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: productSchema,
          },
        },
      },
    },
    async (_: FastifyRequest, reply: FastifyReply) => {
      const products = await productService.findAll();
      return reply.send(products);
    }
  );

  fastify.get(
    '/products/:id',
    {
      schema: {
        params: idParamSchema,
        response: {
          200: productSchema,
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: ProductParams }>,
      reply: FastifyReply
    ) => {
      const product = await productService.findById(request.params.id);
      return reply.send(product);
    }
  );

  fastify.post(
    '/products',
    {
      schema: {
        body: productSchema,
        response: {
          201: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{ Body: ProductCreateDTO }>,
      reply: FastifyReply
    ) => {
      await productService.create(request.body);
      return reply.status(201).send({
        message: 'Product created successfully',
      });
    }
  );

  fastify.put(
    '/products/:id',
    {
      schema: {
        params: idParamSchema,
        body: {
          ...productSchema,
          required: [],
        },
        response: {
          200: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{
        Params: ProductParams;
        Body: ProductUpdateDTO;
      }>,
      reply: FastifyReply
    ) => {
      await productService.update(request.params.id, request.body);
      return reply.send({ message: 'Product updated successfully' });
    }
  );

  fastify.delete(
    '/products/:id',
    {
      schema: {
        params: idParamSchema,
        response: {
          200: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: ProductParams }>,
      reply: FastifyReply
    ) => {
      await productService.delete(request.params.id);
      return reply.send({ message: 'Product deleted successfully' });
    }
  );
}
