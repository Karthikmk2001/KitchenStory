import { Component } from '@angular/core';
import { FooditemsService } from '../services/fooditems.service';
import { Ifooditems } from '../models/fooditems';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  fooditems: Ifooditems[] = [];

  constructor(private _productService: FooditemsService) {}

  ngOnInit() {
    this._productService.getFoodItems().subscribe((result) => {
      this.fooditems = result;
    });
  }

  title: string = 'Food Items Available';
}
