import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifooditems } from '../models/fooditems';
import { FooditemsService } from '../services/fooditems.service';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent {
  id: any;
  errorMessage: string = '';
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
        //console.log(this.fooditem);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteEmp(): void {
    this._foodService.deleteFoodItemById(this.id).subscribe(
      () => {
        this.errorMessage = '';
        alert('Food Item deleted');
        this._router.navigate(['/food-list']);
      },
      (error: any) => {
        this.errorMessage = 'there is a error while deleting';

        console.log(error);
      }
    );
  }
}
