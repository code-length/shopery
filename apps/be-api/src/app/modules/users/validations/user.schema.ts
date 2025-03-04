export const UserSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1, maxLength: 100 },
    lastName: { type: 'string', minLength: 1, maxLength: 100 },
    email: { type: 'string', format: 'email', minLength: 5, maxLength: 100 },
    phoneNumber: { type: 'string', minLength: 10, maxLength: 15 },
    role: { type: 'string', enum: ['admin', 'guest', 'user'] },
    passwordHash: { type: 'string', minLength: 60, maxLength: 60 },
  },
  required: ['firstName', 'lastName', 'email', 'role', 'passwordHash'],
  additionalProperties: false,
};
