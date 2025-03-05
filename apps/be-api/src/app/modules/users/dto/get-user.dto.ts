import { Role } from './uset-create.dto';

export class GetUserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;

  constructor(data: Partial<GetUserDTO>) {
    Object.assign(this, data);
  }
}
