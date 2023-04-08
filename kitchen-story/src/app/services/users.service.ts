import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this._http.get<Iuser[]>('http://localhost:3001/users');
  }

  getUserById(id: number): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(`http://localhost:3001/users/${id}`);
  }

  createUser(user: Iuser): Observable<Iuser[]> {
    return this._http.post<Iuser[]>(`http://localhost:3001/users`, user);
  }
}
