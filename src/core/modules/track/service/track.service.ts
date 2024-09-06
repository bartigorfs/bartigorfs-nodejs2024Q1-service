import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../../models/User';
import { plainToInstance } from 'class-transformer';
import {
  CreateUserDto,
  UpdatePasswordDto,
  UserDto,
} from '../../../dto/user.dto';
import {
  createTrack, deleteTrackById, deleteUserById,
  getAllTracks,
  getTrackById,
  updateTrack,
  updateUser,
} from '../../../db/dummyDb';
import { Track } from '../../../models/Track';
import { v4 as uuidv4 } from 'uuid';
import { CreateTrackDto, TrackDto } from '../../../dto/track.dto';

@Injectable()
export class TrackService {
  async getAllTracks(): Promise<TrackDto[]> {
    try {
      const tracks: Track[] = await getAllTracks();
      return plainToInstance(TrackDto, tracks);
    } catch (error) {
      throw new HttpException(
        error.message || 'Unknown error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTrackById(id: string): Promise<Track> {
    const foundTrack: Promise<Track> = this.findTrackById(id);
    return foundTrack;
  }

  async createTrack(track: CreateTrackDto): Promise<TrackDto> {
    try {
      track['id'] = uuidv4();
      const createdUser = await createTrack(track);
      return plainToInstance(TrackDto, createdUser);
    } catch (error) {
      throw new HttpException(
        error.message || 'Unknown error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateTrack(id: string, trackToUpdate: CreateTrackDto) {
    const track: Track = await this.findTrackById(id);

    try {
      const updatedTrack = await updateTrack(id, {
        ...track,
        ...trackToUpdate,
      });
      return plainToInstance(TrackDto, updatedTrack);
    } catch (error) {
      throw new HttpException(
        error.message || 'Unknown error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteTrack(id: string): Promise<void> {
    await this.findTrackById(id);

    try {
      await deleteTrackById(id);
    } catch (error) {
      throw new HttpException(
        error.message || 'Unknown error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async findTrackById(id: string): Promise<Track> {
    let track: Track;

    try {
      track = await getTrackById(id);
    } catch (error) {
      throw new HttpException(
        error.message || 'Unknown error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    if (!track) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return track;
  }
}
