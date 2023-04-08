import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(
    private _accountService: AccountService,
    private _router: Router
  ) {}
  logout() {
    this._accountService.logout();
    this._router.navigate(['/landingpage']);
  }
}
