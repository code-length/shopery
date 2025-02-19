import Fastify from 'fastify';
import dbConnector from './app/plugins/db'
import productRoutes from './app/routes/products';
import axios from 'axios';

const fastify = Fastify({ logger: true });

fastify.register(dbConnector);
fastify.register(productRoutes);

fastify.get('/', async () => {
  return { message: 'Server is running' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
