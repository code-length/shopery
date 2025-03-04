import { FastifyInstance } from 'fastify';

export async function healthCheckRoutes(fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Server is running' };
  });
}
