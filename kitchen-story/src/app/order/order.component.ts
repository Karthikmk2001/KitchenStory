import { Component } from '@angular/core';
import { Ifooditems } from '../models/fooditems';
import { FooditemsService } from '../services/fooditems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(
    private _foodItemService: FooditemsService,
    private _routes: Router
  ) {}
  searchvalue: any = '';
  searched: boolean = false;
  fooditemscommon: Ifooditems[] = [];
  fooditems: Ifooditems[] = [];
  item: any = [];
  ngOnInit() {
    this._foodItemService.getFoodItems().subscribe((result) => {
      this.fooditems = result;
    });
  }
  viewDetails(food: Ifooditems) {
    alert(JSON.stringify(food));
  }
  addToCart(food: Ifooditems) {
    let itemToAdd = {
      food_id: food.id,
      food_name: food.food_name,
      food_img: food.food_img,
      food_price: food.food_price,
      food_quantity: 1,
    };

    this.fooditems.map((foo) => {
      if (foo.id === food.id) {
        foo.food_quantity -= 1;
        foo.food_added = true;
      }
    });

    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(itemToAdd));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let cartitem = JSON.parse(cart[i]);
        if (cartitem.product_id == itemToAdd.food_id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(itemToAdd));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item = JSON.parse(cart[index]);
        item.product_quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    alert('Added to the Cart');

    // window.location.reload()
  }
  onSubmit() {
    this.fooditems.filter((value) => {
      if (value.food_name == this.searchvalue) {
        this.fooditemscommon.push(value);
        this.searched = true;
        this._routes.navigate(['/order']);
      } else if (this.searchvalue == '') {
        this.searched = false;
      }
    });
  }
}
