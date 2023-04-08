import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifooditems } from '../models/fooditems';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FooditemsService {
  constructor(private _http: HttpClient) {}

  getFoodItems(): Observable<Ifooditems[]> {
    return this._http.get<Ifooditems[]>('http://localhost:3001/fooditems');
  }
  getFoodById(id: number): Observable<Ifooditems> {
    return this._http.get<Ifooditems>(`http://localhost:3001/fooditems/${id}`);
  }
  createFoodItems(fooditems: Ifooditems): Observable<Ifooditems> {
    return this._http.post<Ifooditems>(
      `http://localhost:3001/fooditems`,
      fooditems
    );
  }
  updateFoodItemsById(id: number, food: Ifooditems): Observable<Ifooditems> {
    return this._http.put<Ifooditems>(
      `http://localhost:3001/fooditems/${id}`,
      food
    );
  }

  deleteFoodItemById(food_id: number): Observable<Ifooditems> {
    return this._http.delete<Ifooditems>(
      `http://localhost:3001/fooditems/${food_id}`
    );
  }
}
