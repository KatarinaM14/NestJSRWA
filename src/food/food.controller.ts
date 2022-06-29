import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClothesDto } from 'src/clothes/models/clothes.dto';
import { FoodService } from './food.service';
import { FoodDto } from './models/food.dto';


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

    @Post()
    public addFood(@Body() dto: FoodDto) {
            return this.foodService.create(dto);
    }

    @Delete(":id")
    public deleteFood(@Param("id", ParseIntPipe) id: number) {
            return this.foodService.delete(id);
    }

    @Put(":id")
    public updateFood(@Param("id", ParseIntPipe) id: number, @Body() dto: FoodDto){
            return this.foodService.update(id, dto);
    }
}
