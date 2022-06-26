import { Injectable } from '@nestjs/common';
import { Food } from 'src/models/food';

@Injectable()
export class FoodService {

    foodList : Food[]= [
        {
          id: 1,
          category: "Slatkisi",
          name: "Milka",
          donor: "Dragana Miletic",
          image: "https://www.fresh-store.eu/10704-large_default/milka-oreo-choco-chocolate-100-g-34-oz.jpg"
        },
        {
          id: 2,
          category: "Osnovne namirnice",
          name: "Dijamant ulje",
          donor: "Nenad Simic",
          image: "https://cenoteka.rs/assets/images/articles/ulje-dijamant-1l-1002491-large.jpg"
        },
        {
          id: 3,
          category: "Osnovne namirnice",
          name: "So",
          donor: "Jelena Zdravkovic",
          image: "https://cenoteka.rs/assets/images/articles/kuhinjska-so-tuzlanska-1kg-1002342-large.jpg"
        },
        {
          id: 4,
          category: "Mlecni proizvodi",
          name: "Moja kravica",
          donor: "Natasa Milenkovic",
          image: "https://cenoteka.rs/assets/images/articles/dugotrajno-mleko-imlek-2-8-mm-1l-1001649-large.jpg"
        }
      ];
    public getAll(){
        return this.foodList;
    }

    public getById(id: number){
        return this.foodList.find(food => food.id===id);
    }
}
