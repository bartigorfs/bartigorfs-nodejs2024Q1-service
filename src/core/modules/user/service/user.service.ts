import { Injectable } from "@nestjs/common";
import { createUser, getAllUsers } from "../../../db/dummyDb";
import { CreateUserDto, UserDto } from "../../../dto/user.dto";
import { v4 as uuidv4 } from "uuid";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UserService {
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await getAllUsers();
      return plainToInstance(UserDto, users);
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    try {
      user["id"] = uuidv4();
      const createdUser = await createUser(user);
      return plainToInstance(UserDto, createdUser);
    } catch (error) {
      throw error;
    }
  }
}
