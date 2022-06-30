import { DonationNest } from "src/donation-nest/entities/donation-nest.entity";
import { VolunteeringsNest } from "src/volunteering-nest/entities/volunteering-nest.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserNest {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    //@Column(options: {unique: true})
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    city: string;

    @OneToMany(() => UserNest, user=>user.friends)
    friends: UserNest[];

    //@Column()
    @OneToMany(() => DonationNest, donation=>donation.donator)
    donations: DonationNest[];

    //@Column()
    @OneToMany(()=>VolunteeringsNest, volunteeing=>volunteeing.volunteer)
    volunteerings: VolunteeringsNest[];

    @Column()
    contact: string;
}