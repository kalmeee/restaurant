import {Component, Inject, OnInit} from "@angular/core";
import {Food} from "../food";
import {IFoodService} from "../food.service";


@Component({
  selector: 'app-food-list',
  template: `
    <p>
      food-list Works!
    </p>
    <ul>
      <li *ngFor="let food of foods">

        <a [routerLink]="['/all_food', food.id]">
        \{\{food.name}}
        </a>>
      </li>
    </ul>
  `,
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];



  constructor(@Inject("IFoodService")private _foodService : IFoodService) {

  }

  ngOnInit() {
    this.foods = this._foodService.getAll()
  }
}
