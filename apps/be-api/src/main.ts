import dotenv from 'dotenv';
import Fastify from 'fastify';
import { healthCheckRoutes } from './app/modules/health-check';
import { productAdminRoutes } from './app/modules/products';
import { userAdminRoutes } from './app/modules/users/routes';
import dbConnector from './app/shared/plugins/db';
dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(dbConnector);
fastify.register(productAdminRoutes);
fastify.register(userAdminRoutes);
fastify.register(healthCheckRoutes);

const start = async () => {
  try {
    await fastify.listen({
      port: parseFloat(process.env.BE_ADMIN_PORT),
      host: '0.0.0.0',
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
