import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Volunteering {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    description : string;

    @Column()
    volunteer: boolean;
    
    @Column()
    volunteers: number;
}