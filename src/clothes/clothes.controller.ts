import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesDto } from './models/clothes.dto';

@Controller('clothes')
export class ClothesController {

    constructor(private clothesService: ClothesService){

    }

    @Get()
    public getClothes(){
        return this.clothesService.getAll();
    }

    @Get(":id")
    public getOneClothes(@Param(":id", ParseIntPipe) id:number){
        return this.clothesService.getById(id);
    }

    @Post()
    public addClothes(@Body() dto: ClothesDto) {
            return this.clothesService.create(dto);
    }

    @Delete(":id")
    public deleteClothes(@Param("id", ParseIntPipe) id: number) {
            return this.clothesService.delete(id);
    }

    @Put(":id")
    public updateClothes(@Param("id", ParseIntPipe) id: number, @Body() dto: ClothesDto){
            return this.clothesService.update(id, dto);
    }
}
