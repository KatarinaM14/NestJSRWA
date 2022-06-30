import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserNestDto } from './entities/user-nest.dto';
import { UserNest } from './entities/user-nest.entity';

@Injectable()
export class UserNestService {
    constructor(
        @InjectRepository(UserNest) private userNestRepository: Repository<UserNest>
      ) {}

      public getAll(){
        return this.userNestRepository.find();
     }

      public async create(userNestDto: UserNestDto){
        const userNest = this.userNestRepository.create(userNestDto);
        return await this.userNestRepository.save(userNest);
    }

    async findOne(condition : any)  : Promise<UserNest> {
        console.log("email finOne: " + condition);
         return await this.userNestRepository.findOneBy(condition);
      }

      public async update(dto: UserNest){
        return await this.userNestRepository.save(dto);
      }
      public async delete(id: number){
        return await this.userNestRepository.delete(id);
      }
}
