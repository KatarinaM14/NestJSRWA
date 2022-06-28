import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Food{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category : string | null;

    @Column()
    name : string | null;

    @Column()
    donor : string | null;

    @Column()
    image : string | null;

    @Column()
    like : number;
}



// export var FoodModel: Food = {
//     id: 0,
//     category : '',
//     name : '',
//     donor : '',
//     image : '',
//     like: 0,
// };
