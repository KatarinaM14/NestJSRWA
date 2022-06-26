import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ClothesService } from './clothes.service';

@Controller('clothes')
export class ClothesController {

    constructor(private clothesService: ClothesService){

    }

    @Get()
    public getClothes(){
        return this.clothesService.getAll();
    }

    @Get(':id')
    public getOneClothes(@Param('id', ParseIntPipe) id:number){
        return this.clothesService.getById(id);
    }
}
