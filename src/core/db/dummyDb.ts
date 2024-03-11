import { IDummyDb } from "./model";
import { CreateUserDto } from "../dto/user.dto";

let data: IDummyDb = {
  users: [],
  tracks: [],
  artists: [],
  albums: [],
  Favorites: []
};

export const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.users);
    } catch (e) {
      reject(e);
    }
  });
};

export const getUserById = (userId: string): User => {
  return data.users.find((user: User) => user.id === userId);
};

export const createUser = (user: CreateUserDto) => {
  return new Promise((resolve, reject) => {
    try {
      user["createdAt"] = Date.now();
      console.log(user);
      data.users.push(user as User);
      resolve(user)
    } catch (e) {
      reject(e);
    }
  });
};
