import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesModule } from './clothes/clothes.module';
import { FoodModule } from './food/food.module';
import { VolunteeringModule } from './volunteering/volunteering.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserNestModule } from './user-nest/user-nest.module';
import { DonationNestModule } from './donation-nest/donation-nest.module';
import { VolunteeringNestModule } from './volunteering-nest/volunteering-nest.module';

@Module({
  imports: [ClothesModule, FoodModule, VolunteeringModule, TypeOrmModule.forRoot(typeOrmConfig), UserModule, AuthModule, UserNestModule,  DonationNestModule, VolunteeringNestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
