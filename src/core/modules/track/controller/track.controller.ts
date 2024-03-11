import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TrackService } from '../service/track.service';
import { Track } from '../../../models/Track';
import { CreateTrackDto, TrackDto } from '../../../dto/track.dto';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Get()
  async findAll(): Promise<TrackDto[]> {
    const tracks: TrackDto[] = await this.trackService.getAllTracks();
    return tracks;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Track> {
    const track: Track = await this.trackService.getTrackById(id);
    return track;
  }

  @Post()
  async createNewTrack(@Body() track: CreateTrackDto): Promise<TrackDto> {
    const newUser: TrackDto = await this.trackService.createTrack(track);
    return newUser;
  }

  @Put(':id')
  async updateTrack(
    @Param('id') id: string,
    @Body() track: CreateTrackDto,
  ): Promise<TrackDto> {
    const updatedTrack: TrackDto = await this.trackService.updateTrack(
      id,
      track,
    );
    return updatedTrack;
  }

  @Delete(':id')
  async deleteTrack(@Param('id') id: string, @Res() res: any): Promise<void> {
    await this.trackService.deleteTrack(id);
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
