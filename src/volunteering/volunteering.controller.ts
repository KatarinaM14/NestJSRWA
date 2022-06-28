import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VolunteeringDto } from './models/volunteering.dto';
import { VolunteeringService } from './volunteering.service';

@Controller('volunteering')
export class VolunteeringController {

    constructor(private volunteeringService: VolunteeringService){

    }

    @Get()
    public getVolunteerings(){
        return this.volunteeringService.getAll();
    }

    @Get(':id')
    public getOneVolunteering(@Param('id', ParseIntPipe) id:number){
        return this.volunteeringService.getById(id);
    }

    @Post()
    public addVolunteering(@Body() dto: VolunteeringDto) {
            return this.volunteeringService.create(dto);
    }

    @Delete(":id")
    public deleteVolunteerings(@Param("id", ParseIntPipe) id: number) {
            return this.volunteeringService.delete(id);
    }

    @Put(":id")
    public updateVolunteerings(@Param("id", ParseIntPipe) id: number, @Body() dto: VolunteeringDto){
            return this.volunteeringService.update(id, dto);
    }

}
