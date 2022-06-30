import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VolunteeringsNestDto } from './entities/volunteering-nest.dto';
import { VolunteeringsNest } from './entities/volunteering-nest.entity';

@Injectable()
export class VolunteeringNestService {

    constructor(
        @InjectRepository(VolunteeringsNest) private volunteeringNestRepository: Repository<VolunteeringsNest>
      ) {}

      public getAll(){
        return this.volunteeringNestRepository.find({
          relations: {
            volunteer: true
          }
        });
     }
      
      public getById(id: any){
         return this.volunteeringNestRepository.findOne(id);
       }

      public async create(donationNestDto: VolunteeringsNestDto){
        const volunteeringNest = this.volunteeringNestRepository.create(donationNestDto);
        return await this.volunteeringNestRepository.save(volunteeringNest);
    }

    public async update(dto: VolunteeringsNest){
        return await this.volunteeringNestRepository.save(dto);
      }

      async findOne(condition : any)  : Promise<VolunteeringsNest> {
        console.log( condition);
         return await this.volunteeringNestRepository.findOneBy(condition);
      }
      public async delete(id: number){
        return await this.volunteeringNestRepository.delete(id);
      }
}
