import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Food } from './food';


@Injectable()
export class FoodsService{
  private baseUrl: string = 'http://localhost:9000';
  constructor(private http : Http){
  }

  getAll(): Observable<Food[]>{
    let food$ = this.http
      .get(`${this.baseUrl}/get_food`, { headers: this.getHeaders()})
      .map(mapFoods)
      .catch(handleError);
      return food$;
  }

  private extractData(res: Response) {
    let body = res.json();
    return toFood(body) || { };
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Food> {
    let food$ = this.http
      .get(`${this.baseUrl}/get_food/${id}`, {headers: this.getHeaders()})
      .map(this.extractData)
      .catch(handleError);
      return food$;
  }

  save(food: Food) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this
      .http
      .put(`${this.baseUrl}/people/${food.id}`,
            JSON.stringify(food),
            {headers: this.getHeaders()});
  }

}


function mapFoods(response:Response): Food[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().map(toFood)
}

function toFood(r:any): Food{
  let food = <Food>({
    id: r.id,
    name: r.name,
    prize: Number.parseInt(r.prize),
    foodType: r.foodType,
  });
  console.log('Parsed food:', food);
  return food;
}

// to avoid breaking the rest of our app
// I extract the id from the person url


function mapPerson(response:Response): Food{
   // toPerson looks just like in the previous example
   return toFood(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `NOPE!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

