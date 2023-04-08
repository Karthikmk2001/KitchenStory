import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm: FormGroup;
  submitted: boolean = false;

  user: Iuser = {
    fullname: '',
    username: '',
    email: '',
    password: '',
  };
  get f() {
    return this.userForm.controls;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _usersService: UsersService
  ) {
    this.userForm = this._formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this._usersService.createUser(this.user).subscribe(
      (result) => {
        alert('User Registered Successfully!');
        this._router.navigate(['login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
