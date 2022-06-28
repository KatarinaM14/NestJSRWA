import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { Clothes } from './models/clothes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Clothes])],
    controllers: [ClothesController],
    providers: [ClothesService],
})
export class ClothesModule {}
