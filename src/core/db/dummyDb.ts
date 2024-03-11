import { IDummyDb } from './model';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../models/User';

const data: IDummyDb = {
  users: [],
  tracks: [],
  artists: [],
  albums: [],
  Favorites: [],
};

export const getAllUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.users);
    } catch (e) {
      reject(e);
    }
  });
};

export const getUserById = (userId: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.users.find((user: User) => user.id === userId));
    } catch (e) {
      reject(e);
    }
  });
};

export const createUser = async (user: CreateUserDto) => {
  return new Promise((resolve, reject) => {
    try {
      user['createdAt'] = Date.now();
      user['updatedAt'] = Date.now();
      data.users.push(user as User);
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

export const updateUser = async (id: string, newUser: User) => {
  return new Promise((resolve, reject) => {
    try {
      data.users = data.users.map((user: User) => {
        if (user.id === id) {
          return {
            ...newUser,
            updatedAt: Date.now(),
            version: ++user.version,
          };
        } else return user;
      });
      resolve(data.users.find((user: User) => user.id === id));
    } catch (e) {
      reject(e);
    }
  });
};

export const deleteUserById = async (id: string): Promise<void> => {
  return new Promise<void>((resolve, reject): void => {
    try {
      data.users = data.users.filter((user: User) => user.id !== id);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
