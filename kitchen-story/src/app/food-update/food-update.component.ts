import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifooditems } from '../models/fooditems';
import { FooditemsService } from '../services/fooditems.service';
@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.css'],
})
export class FoodUpdateComponent {
  id: any;
  fooditem: Ifooditems[] = [];
  constructor(
    private _foodService: FooditemsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.params[`id`];
    this._foodService.getFoodById(this.id).subscribe(
      (result) => {
        console.log(result);
        //this.fooditem = result;
        this.fooditem[this.id] = result;
        console.log(this.fooditem);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateFood() {
    this._foodService
      .updateFoodItemsById(this.id, this.fooditem[this.id])
      .subscribe(
        (result) => {
          console.log(result);
          alert('Food Details Updated!');
          this._router.navigate(['/food-list']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
