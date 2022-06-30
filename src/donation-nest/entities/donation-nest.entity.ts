import { UserNest } from "src/user-nest/entities/user-nest.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DonationNest {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => UserNest, donator=> donator.donations, { onDelete: 'CASCADE'})
    donator: UserNest;

    @Column()
    header: string;

    @Column()
    description: string;

    @Column()
    city: string;

    @Column()
    address: string;

    @Column()
    contact: string;


}