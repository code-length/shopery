import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { idParamSchema } from '../../../shared/validations';
import { UserCreateDTO, UserUpdateDTO } from '../dto';
import { UserService } from '../services';
import { UserSchema } from '../validations';

interface UserParams {
  id: string;
}

export async function userRoutes(fastify: FastifyInstance) {
  const userService = new UserService();

  fastify.get(
    '/users',
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: UserSchema,
          },
        },
      },
    },
    async (_: FastifyRequest, reply: FastifyReply) => {
      const user = await userService.findAll();
      return reply.send(user);
    }
  );

  fastify.get(
    '/users/:id',
    {
      schema: {
        params: idParamSchema,
        response: {
          200: UserSchema,
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: UserParams }>,
      reply: FastifyReply
    ) => {
      const user = await userService.findById(request.params.id);
      return reply.send(user);
    }
  );

  fastify.post(
    '/users',
    {
      schema: {
        body: UserSchema,
        response: {
          201: {
            type: 'object',
            properties: {
              massage: { type: 'string' },
            },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{ Body: UserCreateDTO }>,
      reply: FastifyReply
    ) => {
      await userService.create(request.body);
      return reply.status(201).send({
        message: 'User created successfully',
      });
    }
  );

  fastify.put(
    '/users/:id',
    {
      schema: {
        params: idParamSchema,
        body: {
          ...UserSchema,
          required: [],
        },
        response: {
          200: {
            type: 'object',
            properties: {
              massage: { type: 'string' },
            },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: UserParams; Body: UserUpdateDTO }>,
      reply: FastifyReply
    ) => {
      await userService.update(request.params.id, request.body);
      return reply.send({ message: 'User update successfully' });
    }
  );

  fastify.delete(
    '/users/:id',
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
      request: FastifyRequest<{ Params: UserParams }>,
      reply: FastifyReply
    ) => {
      await userService.delete(request.params.id);
      return reply.send({ message: 'User delete successfully' });
    }
  );
}
