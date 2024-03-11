import { Expose } from "class-transformer";

export class UserDto {
  @Expose()
  id?: string;
  @Expose()
  login: string;
  password: string;
  @Expose()
  version: number;
  @Expose()
  createdAt: number;
  @Expose()
  updatedAt: number;
}

export interface CreateUserDto {
  login: string;
  password: string;
}

export interface UpdatePasswordDto {
  oldPassword: string; // previous password
  newPassword: string; // new password
}
