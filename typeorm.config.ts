import { Clothes } from "src/clothes/models/clothes.entity";
import { DonationNest } from "src/donation-nest/entities/donation-nest.entity";
import { Food } from "src/food/models/food.entity";
import { UserNest } from "src/user-nest/entities/user-nest.entity";
import { User } from "src/user/models/user.entity";
import { VolunteeringsNest } from "src/volunteering-nest/entities/volunteering-nest.entity";
import { Volunteering } from "src/volunteering/models/volunteering.entity";
import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'donations',
    entities: [Clothes, Food, Volunteering, User, UserNest, DonationNest,VolunteeringsNest],
    synchronize: true
}