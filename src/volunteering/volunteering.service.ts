import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Volunteering } from 'src/volunteering/models/volunteering.entity';
import { Repository } from 'typeorm';
import { VolunteeringDto } from './models/volunteering.dto';

@Injectable()
export class VolunteeringService {

  constructor(
    @InjectRepository(Volunteering) private volunteeringRepository: Repository<Volunteering>
  ) {}
    

    public getAll(){
      return this.volunteeringRepository.find();
    }

    public getById(id: number){
      //return this.volunteeringRepository.findOne(id);
    }

    public async create(foodDto: VolunteeringDto){
      const food = this.volunteeringRepository.create(foodDto);
      return await this.volunteeringRepository.save(food);
    }

    public async delete(id: number){
       return await this.volunteeringRepository.delete(id);
    }

    public async update(id: number, dto: VolunteeringDto){
      return await this.volunteeringRepository.update(id, dto);
   }
    
}
