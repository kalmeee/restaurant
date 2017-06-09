import { Component } from '@angular/core';
import {FoodService} from "./food.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ {provide:'IFoodService', useClass: FoodService} ]
})
export class AppComponent {
  title = 'Ready to serve';
}
