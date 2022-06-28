import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clothes } from 'src/clothes/models/clothes.entity';
import { Repository } from 'typeorm';
import { ClothesDto } from './models/clothes.dto';

@Injectable()
export class ClothesService {
    
    constructor(
      @InjectRepository(Clothes) private clothesRepository: Repository<Clothes>
    ) {}

    public getAll(){
       return this.clothesRepository.find();
    }

    public getById(id: number){
       //return this.clothesRepository.findOne(id);
    }

    public async create(clothesDto: ClothesDto){
        const clothes = this.clothesRepository.create(clothesDto);
        return await this.clothesRepository.save(clothes);
    }

    public async delete(id: number){
      return await this.clothesRepository.delete(id);
    }

    public async update(id: number, dto: ClothesDto){
      return await this.clothesRepository.update(id, dto);
    }
}
