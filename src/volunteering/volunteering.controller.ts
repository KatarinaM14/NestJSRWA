import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
}
