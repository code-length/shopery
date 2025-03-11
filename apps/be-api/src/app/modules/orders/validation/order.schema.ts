export const OrderSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    userId: { type: 'string' },
    totalPrice: { type: 'number' },
    status: { type: 'string' },
    totalItems: { type: 'number' },
  },
  required: ['id', 'userId', 'totalPrice', 'status', 'totalItems'],
  additionalProperties: false,
};
