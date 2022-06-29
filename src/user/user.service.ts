import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
      ) {}

     
      public  getAllUsers(){
        return this.userRepository.find();
     }
      async create(data: any) : Promise<User> {
        return this.userRepository.save(data);
      }

      async findOne(condition : any)  : Promise<any> {
        console.log("email finOne: " + condition.email);
         return await this.userRepository.findOneBy(condition);
      }
}
