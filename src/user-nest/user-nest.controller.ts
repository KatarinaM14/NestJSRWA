import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DonationNestDto } from 'src/donation-nest/entities/donation-nest.dto';
import { DonationNest } from 'src/donation-nest/entities/donation-nest.entity';
import { VolunteeringsNest } from 'src/volunteering-nest/entities/volunteering-nest.entity';
import { UserNestDto } from './entities/user-nest.dto';
import { UserNestService } from './user-nest.service';

@Controller('user-nest')
export class UserNestController {

    constructor(private userNestService: UserNestService){

    }

    @Get()
    public getUserNest(){
        return this.userNestService.getAll();
    }
    
    @Post()
    public addUserNest(@Body() dto: UserNestDto) {
            return this.userNestService.create(dto);
    }

    @Put("donation/:id")
     public async addDonation(@Param("id", ParseIntPipe) id: number, @Body() dto: DonationNest){
        
        //const user = new UserNestDto();
        const user = await this.userNestService.findOne(id);

      

        if(!user){
            return "User not found!";
        }
        else{
            user.donations = [dto];
        }

            return this.userNestService.update(user);
    }


    @Put("volunteering/:id")
     public async addVolunteering(@Param("id", ParseIntPipe) id: number, @Body() dto: VolunteeringsNest){
        
        //const user = new UserNestDto();
        const user = await this.userNestService.findOne(id);

      

        if(!user){
            return "User not found!";
        }
        else{
            user.volunteerings = [dto];
            //const volunteering = await this.volunteeringNestService.getById(dto.id);

            //volunteering.volunteer = user;

           //  this.volunteeringNestService.update(dto);
        }

            return await this.userNestService.update(user);
    }
    @Delete(":id")
    public deleteUserNest(@Param("id", ParseIntPipe) id: number) {
            return this.userNestService.delete(id);
    }
}
