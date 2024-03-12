import { User } from '../models/User';
import { Track } from '../models/Track';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';
import { Favorites } from '../models/Favorites';

export interface IDummyDb {
  users: User[];
  tracks: Track[];
  artists: Artist[];
  albums: Album[];
  Favorites: Favorites[];
}
