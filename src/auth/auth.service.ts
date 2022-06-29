import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    // constructor(
    //     @InjectRepository(User) private userRepository: Repository<User>
    //   ) {}
  

    //     async create(data: any) : Promise<User> {
    //     return this.userRepository.save(data);
    //   }

}
