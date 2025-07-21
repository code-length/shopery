export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  passwordHash?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
