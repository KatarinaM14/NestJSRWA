import { UserNest } from "src/user-nest/entities/user-nest.entity";

export class DonationNestDto {
    donator : UserNest;
    header: string | null;
    description : string | null;
    city : string | null;
    address : string | null;
    contact: string | null;
}
