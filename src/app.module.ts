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

@Module({
  imports: [ClothesModule, FoodModule, VolunteeringModule, TypeOrmModule.forRoot(typeOrmConfig), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
