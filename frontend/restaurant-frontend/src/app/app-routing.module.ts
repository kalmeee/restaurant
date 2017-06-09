import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FoodListComponent} from "./food-list/food-list.component"
import {FoodDetailsComponent} from "./food-details/food-details.component"

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'all_food',
    component: FoodListComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/all_food',
    pathMatch: 'full'
  },
  {
    path: 'all_food/:id',
    component: FoodDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
//export const appRouterModule = RouterModule.forRoot(routes);
