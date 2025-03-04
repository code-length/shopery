export const productSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1, maxLength: 100 },
    price: { type: 'number', minimum: 0 },
    description: { type: 'string', maxLength: 1000 },
    categoriesId: { type: 'number', minimum: 1 },
    rating: { type: 'number', minimum: 0, maximum: 5 },
    popularTag: {
      type: 'array',
      items: { type: 'string', minLength: 1 },
      maxItems: 10,
    },
    quantityInStock: { type: 'number', minimum: 0 },
    brand: { type: 'string', maxLength: 50 },
    img: { type: 'string', format: 'uri' },
  },
  required: [
    'name',
    'price',
    'categoriesId',
    'rating',
    'popularTag',
    'quantityInStock',
  ],
  additionalProperties: false,
};
