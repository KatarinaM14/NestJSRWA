import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DonationNestDto } from './entities/donation-nest.dto';
import { DonationNest } from './entities/donation-nest.entity';

@Injectable()
export class DonationNestService {

    constructor(
        @InjectRepository(DonationNest) private donationNestRepository: Repository<DonationNest>
      ) {}

      public getAll(){
        return this.donationNestRepository.find();
     }
     public getById(id: any){
        return this.donationNestRepository.findOne(id);
      }

      public async create(donationNestDto: DonationNestDto){
        const donationNest = this.donationNestRepository.create(donationNestDto);
        return await this.donationNestRepository.save(donationNest);
    }

    async findOne(condition : any)  : Promise<DonationNest> {
        console.log( condition);
         return await this.donationNestRepository.findOneBy(condition);
      }

      public async update(dto: DonationNest){
        return await this.donationNestRepository.save(dto);
      }
      public async delete(id: number){
        return await this.donationNestRepository.delete(id);
      }
}
