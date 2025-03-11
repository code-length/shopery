import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { idParamSchema } from '../../../shared/validations';
import { OrderCreateDTO, OrderUpdateDTO } from '../dto';
import { OrderService } from '../services';
import { orderSchema } from '../validations';

interface OrderParams {
  id: string;
}

export async function orderAdminRoutes(fastify: FastifyInstance) {
  const orderService = new OrderService();

  fastify.get(
    '/orders',
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: orderSchema,
          },
        },
      },
    },
    async (_: FastifyRequest, reply: FastifyReply) => {
      const orders = await orderService.findAll();
      return reply.send(orders);
    }
  );

  fastify.get(
    '/orders/:id',
    {
      schema: {
        params: idParamSchema,
        response: {
          200: orderSchema,
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: OrderParams }>,
      reply: FastifyReply
    ) => {
      const order = await orderService.findById(request.params.id);
      return reply.send(order);
    }
  );

  fastify.post(
    '/orders',
    {
      schema: {
        body: orderSchema,
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
      request: FastifyRequest<{ Body: OrderCreateDTO }>,
      reply: FastifyReply
    ) => {
      await orderService.create(request.body);
      return reply.status(201).send({
        message: 'Order created successfully',
      });
    }
  );

  fastify.put(
    '/orders/:id',
    {
      schema: {
        params: idParamSchema,
        body: {
          ...orderSchema,
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
        Params: OrderParams;
        Body: OrderUpdateDTO;
      }>,
      reply: FastifyReply
    ) => {
      await orderService.update(request.params.id, request.body);
      return reply.send({ message: 'Order updated successfully' });
    }
  );

  fastify.delete(
    '/orders/:id',
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
      request: FastifyRequest<{ Params: OrderParams }>,
      reply: FastifyReply
    ) => {
      await orderService.delete(request.params.id);
      return reply.send({ message: 'Order deleted successfully' });
    }
  );
}
