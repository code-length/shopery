export const idParamSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' },
  },
  required: ['id'],
};
