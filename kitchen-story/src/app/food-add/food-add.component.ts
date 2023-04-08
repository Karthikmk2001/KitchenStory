import { Component } from '@angular/core';
import { FooditemsService } from '../services/fooditems.service';
import { Ifooditems } from '../models/fooditems';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css'],
})
export class FoodAddComponent {
  fooditem: Ifooditems = {
    id: 0,
    food_name: '',
    food_img: '',
    food_price: 0,
    food_quantity: 0,
    food_added: true,
  };
  constructor(
    private _foodservice: FooditemsService,
    private _routes: Router
  ) {}

  addFood() {
    this._foodservice.createFoodItems(this.fooditem).subscribe(
      (result) => {
        console.log(result);
        alert('Food Item Added!');
        this._routes.navigate(['/food-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
