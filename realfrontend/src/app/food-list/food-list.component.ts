import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodsService } from "../foods.service";

@Component({
  selector: 'app-food-list',
  template: `

  <section *ngIf="isLoading && !errorMessage">
    Retrieving data...
  </section>
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let food of foods">
      <a [routerLink]="['/foods', food.id]">
        {{food.name}} 
      </a>
    </li>
  </ul>
  <!-- HERE: added this error message -->
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `,
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: FoodsService) { }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ f => this.foods = f,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
  }

}
