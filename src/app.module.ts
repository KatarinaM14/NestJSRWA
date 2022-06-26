import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesController } from './clothes/clothes.controller';
import { ClothesService } from './clothes/clothes.service';
import { FoodController } from './food/food.controller';
import { VolunteeringController } from './volunteering/volunteering.controller';
import { FoodService } from './food/food.service';
import { VolunteeringService } from './volunteering/volunteering.service';

@Module({
  imports: [],
  controllers: [AppController, ClothesController, FoodController, VolunteeringController],
  providers: [AppService, ClothesService, FoodService, VolunteeringService],
})
export class AppModule {}
