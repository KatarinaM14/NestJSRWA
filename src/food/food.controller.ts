import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {

    constructor(private foodService: FoodService){

    }

    @Get()
    public getFood(){
        return this.foodService.getAll();
    }

    @Get(':id')
    public getOneFood(@Param('id', ParseIntPipe) id:number){
        return this.foodService.getById(id);
    }
}
