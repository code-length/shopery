import Fastify from 'fastify';
import dbConnector from './app/plugins/db'
import productRoutes from './app/routes/products';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(dbConnector);
fastify.register(productRoutes);

fastify.get('/', async () => {
  return { message: 'Server is running' };
});

const start = async () => {
  try {
    await fastify.listen({ port: parseFloat(process.env.BE_ADMIN_PORT), host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
