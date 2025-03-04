import { UserCreateDTO, UserUpdateDTO } from '../dto';
import { User } from '../models';

export class UserService {
  async findAll() {
    return await User.find().lean();
  }

  async findById(id: string) {
    const user = await User.findById(id).lean();

    return user;
  }

  async create(userData: UserCreateDTO) {
    const user = new User(userData);

    return await user.save();
  }

  async update(id: string, userData: UserUpdateDTO) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: userData },
      { new: true, runValidators: true }
    );

    return updatedUser;
  }

  async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }
}
