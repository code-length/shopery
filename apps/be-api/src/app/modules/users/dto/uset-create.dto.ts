export type Role = 'admin' | 'guest' | 'user';

export interface UserCreateDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  passwordHash: string;
}
