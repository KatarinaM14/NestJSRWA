import { Injectable } from '@nestjs/common';
import { Volunteering } from 'src/models/volunteering';

@Injectable()
export class VolunteeringService {

    volunteeringList : Volunteering[] = [
        {
          id: 1,
          description: "Potreba mi je pomoc oko nabavke osnovnih namirnica. Imam 62 godine i zivim sama.",
          volunteer: false
        },
        {
          id: 2,
          description: "Potrebna mi je pomoc oko ciscenja kuce.",
          volunteer: false
        },
        {
          id: 3,
          description: "Potrebna mi je pomoc oko kucnog ljubimca.",
          volunteer: false
        }
      ];

    public getAll(){
        return this.volunteeringList;
    }

    public getById(id: number){
        return this.volunteeringList.find(volunteering => volunteering.id===id);
    }
}
