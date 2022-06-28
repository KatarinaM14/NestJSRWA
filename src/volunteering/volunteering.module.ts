import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteering } from './models/volunteering.entity';
import { VolunteeringController } from './volunteering.controller';
import { VolunteeringService } from './volunteering.service';

@Module({
    imports: [TypeOrmModule.forFeature([Volunteering])],
    controllers: [VolunteeringController],
    providers: [VolunteeringService],
})
export class VolunteeringModule {}
