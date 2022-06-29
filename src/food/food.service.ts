import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clothes } from 'src/clothes/models/clothes.entity';

import { Repository } from 'typeorm';
import { FoodDto } from './models/food.dto';
import { Food } from './models/food.entity';


@Injectable()
export class FoodService {

  constructor(
    @InjectRepository(Food) private foodRepository: Repository<Food>
  ) {}
   
    public getAll(){
       return this.foodRepository.find();
    }

    public getById(id: number){
     // return this.foodRepository.findOne(id);
    }

    public async create(foodDto: FoodDto){
      const food = this.foodRepository.create(foodDto);
      return await this.foodRepository.save(food);
  }

  public async delete(id: number){
    return await this.foodRepository.delete(id);
  }

  public async update(id: number, dto: FoodDto){
      return await this.foodRepository.update(id, dto);
  }
}
