import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { FoodsService } from "../foods.service";
import { Food } from "../food";

@Component({
  selector: 'app-person-details',
  templateUrl: './food-details.component.html',
  styles: []
})
export class FoodDetailsComponent implements OnInit, OnDestroy {
  foodTypes: string[] = ['soup', 'main', 'dessert', 'apetizer'];
  food: Food;
  sub:any;

  constructor(private route: ActivatedRoute,
              private peopleService: FoodsService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting food with id: ', id);
      this.peopleService
        .get(id)
        .subscribe(p => this.food = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
    let link = ['/foods'];
    this.router.navigate(link);
  }

  savePersonDetails(){
      this.peopleService
          .save(this.food)
          .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.food)}`));
  }

  /*
  //alternatively use:
  gotoPeoplesList(){
      window.history.back();
  }
  */

}
