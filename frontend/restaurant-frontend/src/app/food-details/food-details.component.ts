import {Component, OnInit} from "@angular/core";
import {Food} from "../food";

import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../food.service";


@Component({
  selector: 'app-food-details',
  templateUrl: 'food-details.component.html',
})
export class FoodDetailsComponent implements OnInit {
  food : Food;
  foodTypes:  string[] = ['dessert', 'main', 'soup', 'appetizer'];
  sub: any;

  constructor(private foodService : FoodService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  savePersonDetails(){
    this.foodService.save(this.food);
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.food = this.foodService.get(id);
    });
  }

  ngOnDestroy() : void{
    this.sub.unsubscribe();
  }

  gotoFoodsList(){
    let link = ['/all_food'];
    this.router.navigate(link);
    //this also works
    //window.history.back()
  }
}
