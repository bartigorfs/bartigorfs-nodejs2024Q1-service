import { IDummyDb } from './model';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../models/User';
import { Track } from '../models/Track';
import { CreateTrackDto } from '../dto/track.dto';

const data: IDummyDb = {
  users: [],
  tracks: [],
  artists: [],
  albums: [],
  Favorites: [],
};

export const getAllTracks = async (): Promise<Track[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.tracks);
    } catch (e) {
      reject(e);
    }
  });
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

export const createTrack = async (track: CreateTrackDto) => {
  return new Promise((resolve, reject) => {
    try {
      data.tracks.push(track as Track);
      resolve(track);
    } catch (e) {
      reject(e);
    }
  });
};

export const getTrackById = (trackId: string): Promise<Track> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.tracks.find((track: Track) => track.id === trackId));
    } catch (e) {
      reject(e);
    }
  });
};

export const updateTrack = async (id: string, newTrack: CreateTrackDto) => {
  return new Promise((resolve, reject) => {
    try {
      data.tracks = data.tracks.map((track: Track) => {
        if (track.id === id) {
          return { ...newTrack } as Track;
        } else return track;
      });
      resolve(data.tracks.find((track: Track) => track.id === id));
    } catch (e) {
      reject(e);
    }
  });
};

export const deleteTrackById = async (id: string): Promise<void> => {
  return new Promise<void>((resolve, reject): void => {
    try {
      data.tracks = data.tracks.filter((track: Track) => track.id !== id);
      resolve();
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
