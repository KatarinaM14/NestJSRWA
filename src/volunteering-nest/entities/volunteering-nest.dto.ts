import { UserNest } from "src/user-nest/entities/user-nest.entity";

export class VolunteeringsNestDto {
    volunteer : UserNest;
    description : string | null;
    place : string | null;
    address : string | null;
    time : string | null;
}