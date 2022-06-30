import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNestModule } from 'src/user-nest/user-nest.module';
import { DonationNestController } from './donation-nest.controller';
import { DonationNestService } from './donation-nest.service';
import { DonationNest } from './entities/donation-nest.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DonationNest]),  UserNestModule],
    controllers: [DonationNestController],
    providers: [DonationNestService],
})
export class DonationNestModule {}
