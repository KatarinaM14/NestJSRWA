import { Clothes } from "src/clothes/models/clothes.entity";
import { Food } from "src/food/models/food.entity";
import { Volunteering } from "src/volunteering/models/volunteering.entity";
import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'donations',
    entities: [Clothes, Food, Volunteering],
    synchronize: true
}