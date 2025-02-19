import fp from 'fastify-plugin'
import mongoose from 'mongoose'
import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import dotenv from 'dotenv'

dotenv.config()

interface DbPluginOptions {
    uri?: string;
    timeout?: number;
}

// Declare module for fastify to recognize our decorated property
declare module 'fastify' {
    interface FastifyInstance {
        db: typeof mongoose
    }
}

const dbConnector: FastifyPluginAsync<DbPluginOptions> = async (
    fastify: FastifyInstance,
    options: DbPluginOptions = {}
) => {
    const uri = options.uri || process.env.MONGO_URI
    if (!uri) {
        throw new Error('MongoDB URI is required')
    }

    const connectionOptions = {
        serverSelectionTimeoutMS: options.timeout || 5000,
        connectTimeoutMS: options.timeout || 5000,
    }

    try {
        fastify.log.info('Connecting to MongoDB...')
        
        const db = await mongoose.connect(uri, connectionOptions)
        
        fastify.decorate('db', db)
        
        mongoose.connection.on('connected', () => {
            fastify.log.info('MongoDB connected successfully')
        })

        mongoose.connection.on('error', (err) => {
            fastify.log.error('MongoDB connection error:', err)
        })

        mongoose.connection.on('disconnected', () => {
            fastify.log.warn('MongoDB disconnected')
        })

        fastify.addHook('onClose', async () => {
            if (mongoose.connection.readyState === 1) {
                await mongoose.connection.close()
                fastify.log.info('MongoDB connection closed through fastify hook')
            }
        })
    } catch (err) {
        fastify.log.error('Error connecting to MongoDB:', err)
        throw err
    }
}

export default fp(dbConnector, {
    name: 'dbConnector',
    fastify: '5.x'
})