import { Injectable } from '@nestjs/common';
import { Clothes } from 'src/models/clothes';

@Injectable()
export class ClothesService {
    clothesList : Clothes[] = [
        {
          id: 1,
          category: "Majica",
          donor: "Katarina Maksimovic",
          description: "Majica je S velicine. Nosena je 3 meseca. Odlicnog je kvaliteta.",
          image: "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_1/870x580/17f82f742ffe127f42dca9de82fb58b1/w/m/1645805251_223T18A4499_X4804_E01_ZHC.jpg?imwidth=870"
        },
        {
          id: 2,
          category: "Pantalone",
          donor: "Stefan Markovic",
        description: "Pantalone su broj 40. Nosene su 9 meseci.",
          image: "https://dimg.dillards.com/is/image/DillardsZoom/mainProduct/roundtree--yorke-travel-smart-non-iron-pleated-ultimate-comfort-microfiber-stretch-dress-pants/05421659_zi_light_khaki.jpg"
        },
        {
          id: 3,
          category: "Dukserica",
          donor: "Milica Miletic",
          description: "Dukserica je S velicine. Nosena je 5 meseca. Odlicnog je kvaliteta.",
          image: "https://mrbeansport.rs/wp-content/uploads/2019/04/bld001-62s-4f-zenski-duks.jpg"
        },
        {
          id: 4,
          category: "Kosulja",
          donor: "Milos Dimic",
          description: "Kosulja je XL velicine. Nosena je 2 meseca. Odlicnog je kvaliteta.",
          image: "https://rs.beosport.com/media/catalog/product/cache/5520706cdd5888f9caf980abe039f428/D/1/D17026_C271_110-01_1.jpg"
        },
      ];
    public getAll(){
        return this.clothesList;
    }

    public getById(id: number){
        return this.clothesList.find(clothes => clothes.id===id);
    }
}
