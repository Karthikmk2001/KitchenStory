import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Iuser } from '../models/user';
import { Iadmin } from '../models/admin';
import { LoginComponent } from '../login/login.component';
import { AdminService } from './admin.service';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private loggedIn: boolean = false;
  users: Iuser[] = [];
  admin: Iadmin[] = [];
  loggedUser: any = {
    username: '',
    password: '',
  };

  constructor(
    private _usersService: UsersService,
    private _adminService: AdminService
  ) {}

  login(username: string, password: string): any {
    this._usersService.getUsers().subscribe((users) => (this.users = users));
    this._adminService.getAdmin().subscribe((admin) => (this.admin = admin));
    //console.log(this.users);

    this.users.filter((user) => {
      if (user.username == username && user.password == password) {
        this.loggedUser.username = user.username;
        this.loggedUser.password = user.password;
        localStorage.setItem('firstname', user.fullname);
        localStorage.setItem('email', user.email);
      }
    });
    this.admin.filter((admin) => {
      if (admin.username == username && admin.password == password) {
        this.loggedUser.username = admin.username;
        this.loggedUser.password = admin.password;
      }
    });

    if (
      username == this.loggedUser.username &&
      password == this.loggedUser.password
    ) {
      localStorage.setItem('user', username);

      this.loggedIn = true;
      alert('Login Success');
      return this.loggedIn;
    } else {
      this.loggedIn = false;
      alert('Please Enter Valid Credentials!');
      return this.isLoggedIn;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
