import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ValidateUUIDMiddleware } from '../../middlewares/validateuuid/validateuuid.middleware';
import { TrackController } from './controller/track.controller';
import { TrackService } from './service/track.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateUUIDMiddleware).forRoutes('track/:id');
  }
}
