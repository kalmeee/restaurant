import { Injectable } from '@angular/core';
import {Food} from "./food";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {map} from "rxjs/operator/map";

export interface IFoodService {
  getAll() : Food[]
};

const FOODS : Food[] = [
  {id : 1, name : "torta", prize : 100, foodType : "finom"},
  {id : 2, name : "spenót", prize : 100, foodType : "fúj"},
  {id : 3, name : "lazac", prize : 100, foodType : "drága"}
];

@Injectable()
export class FoodService implements IFoodService{
  private baseUrl: string = 'localhost:9000';
  constructor(private http : Http){
  }

  getAll(): Observable<Food[]>{
    let food$ = this.http
      .get(`${this.baseUrl}/get_food`, )
      .map(mapFoods);
    return food$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // getAll() : Food[] {
  //   return FOODS;
  // }

  get(id: number) : Food {
    return FOODS.find(f => f.id === id);
  }

  save(food: Food){
    let originalFood = FOODS.find(f => f.id === food.id);
    if (originalFood) Object.assign(originalFood, food);
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
