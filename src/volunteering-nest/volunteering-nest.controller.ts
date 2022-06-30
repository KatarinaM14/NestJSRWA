import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserNest } from 'src/user-nest/entities/user-nest.entity';
import { UserNestService } from 'src/user-nest/user-nest.service';
import { VolunteeringsNestDto } from './entities/volunteering-nest.dto';
import { VolunteeringNestService } from './volunteering-nest.service';

@Controller('volunteering-nest')
export class VolunteeringNestController {

    constructor(private volunteeringNestService: VolunteeringNestService, private userNestService: UserNestService){

    }

    @Get()
    public getAllVolunteering(){
        return this.volunteeringNestService.getAll();
    }

    @Get(':id')
    public getOneVolunteering(@Param('id', ParseIntPipe) id:number){
        return this.volunteeringNestService.getById(id);
    }
    
    // @Post(':id')
    // public async addVolunteering(@Param('id', ParseIntPipe) id:number,@Body() dto: VolunteeringsNestDto) {
    //         const user = await this.userNestService.findOne(id);
    //         dto.volunteer = user;
    //         return await this.volunteeringNestService.create(dto);
    // }
    @Post(':id')
    public async addVolunteering(@Param('id', ParseIntPipe) id:number,@Body() dto: VolunteeringsNestDto) {
            const user = await this.userNestService.getAll();

            user.forEach(u => {
                if(u.id === id){
                    dto.volunteer = u;
                }

            })

            
            return await this.volunteeringNestService.create(dto);
    }
    @Put("user/:id")
     public async addUserInVolunteering(@Param("id", ParseIntPipe) id: number, @Body() dto:UserNest){
        
        //const user = new UserNestDto();
        const volunteering = await this.volunteeringNestService.findOne(id);

      

        if(!volunteering){
            return "User not found!";
        }
        else{
            volunteering.volunteer = dto;
        }

            return await this.volunteeringNestService.update(volunteering);
    }

    @Delete(":id")
    public deleteVolunteering(@Param("id", ParseIntPipe) id: number) {
            return this.volunteeringNestService.delete(id);
    }
}
