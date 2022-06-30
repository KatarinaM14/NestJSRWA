import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNestModule } from 'src/user-nest/user-nest.module';
import { UserModule } from 'src/user/user.module';
import { VolunteeringsNest } from './entities/volunteering-nest.entity';
import { VolunteeringNestController } from './volunteering-nest.controller';
import { VolunteeringNestService } from './volunteering-nest.service';

@Module({
    imports: [TypeOrmModule.forFeature([VolunteeringsNest]), UserNestModule],
    controllers: [VolunteeringNestController],
    providers: [VolunteeringNestService],
    //exports: [VolunteeringNestService],
})
export class VolunteeringNestModule {}
