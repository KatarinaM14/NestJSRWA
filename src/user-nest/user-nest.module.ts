import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteeringNestModule } from 'src/volunteering-nest/volunteering-nest.module';
import { UserNest } from './entities/user-nest.entity';
import { UserNestController } from './user-nest.controller';
import { UserNestService } from './user-nest.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserNest]),],
    controllers: [UserNestController],
    providers: [UserNestService],
    exports: [UserNestService],
})
export class UserNestModule {}
