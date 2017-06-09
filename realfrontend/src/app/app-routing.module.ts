import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodListComponent } from "./food-list/food-list.component";
import { FoodDetailsComponent } from "./food-details/food-details.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'foods',
    component: FoodListComponent,
  },
  // map '/persons/:id' to food details component
  {
    path: 'foods/:id',
    component: FoodDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/foods',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
