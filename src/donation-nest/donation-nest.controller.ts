import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserNest } from 'src/user-nest/entities/user-nest.entity';
import { UserNestService } from 'src/user-nest/user-nest.service';
import { DonationNestService } from './donation-nest.service';
import { DonationNestDto } from './entities/donation-nest.dto';
import { DonationNest } from './entities/donation-nest.entity';

@Controller('donation-nest')
export class DonationNestController {

    constructor(private donationNestService: DonationNestService, private userNestService: UserNestService){

    }

    @Get()
    public getAllDonations(){
        return this.donationNestService.getAll();
    }

    @Get(':id')
    public getOneDonation(@Param('id', ParseIntPipe) id:number){
        return this.donationNestService.getById(id);
    }

    // @Post(':id')
    // public async addDonation(@Param('id', ParseIntPipe) id:number,@Body() dto: DonationNest) {
    //        const user = await this.userNestService.findOne(id);
    //        console.log(user);
    //        dto.donator = user;
    //         return await  this.donationNestService.create(dto);
    // }

    @Post(':id')
    public async addDonation(@Param('id', ParseIntPipe) id:number,@Body() dto: DonationNest) {
           const user = await this.userNestService.getAll();
           console.log(user);

           user.forEach(u => {
            if(u.id === id){
                dto.donator = u;
            }

        })

            return await  this.donationNestService.create(dto);
    }

    @Put("user/:id")
    public async addUserInDonation(@Param("id", ParseIntPipe) id: number, @Body() dto:UserNest){
       
       //const user = new UserNestDto();
       const donation = await this.donationNestService.findOne(id);

     

       if(!donation){
           return "User not found!";
       }
       else{
            donation.donator = dto;
       }

           return await this.donationNestService.update(donation);
   }

   @Put("donation")
   public async updateDonation( @Body() dto:DonationNest){
      
          return await this.donationNestService.update(dto);
  }
   @Delete(":id")
    public deleteDonation(@Param("id", ParseIntPipe) id: number) {
            return this.donationNestService.delete(id);
    }
}
