import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clothes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    donor : string;

    @Column()
    description : string;

    @Column()
    image: string;

    @Column()
    like: number;
}

// export var ClothesModel: Clothes = {
//     id: 0,
//     category: '',
//     donor : '',
//     description : '',
//     image: '',
//     like: 0
// }