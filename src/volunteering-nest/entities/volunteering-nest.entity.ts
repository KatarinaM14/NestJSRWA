import { UserNest } from "src/user-nest/entities/user-nest.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VolunteeringsNest {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => UserNest, volunteer=> volunteer.volunteerings, { onDelete: 'CASCADE'})
    volunteer: UserNest;

    @Column()
    description: string;

    @Column()
    place: string;

    @Column()
    address: string;

    @Column()
    time: string;
}