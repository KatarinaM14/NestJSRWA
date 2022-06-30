import { DonationNest } from "src/donation-nest/entities/donation-nest.entity";
import { VolunteeringsNest } from "src/volunteering-nest/entities/volunteering-nest.entity";
import { UserNest } from "./user-nest.entity";

export class UserNestDto {
    name : string | null;
    email : string | null;
    password : string | null;
    city : string | null;
    friends : UserNest[];
    donations : DonationNest[]
    volunteerings: VolunteeringsNest[];
    contact: string | null;
}
