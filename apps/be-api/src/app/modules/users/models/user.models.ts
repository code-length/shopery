import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    role: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', UserSchema);
