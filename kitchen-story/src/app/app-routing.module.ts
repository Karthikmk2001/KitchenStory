import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AuthguardService } from './services/authguard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodUpdateComponent } from './food-update/food-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
  { path: 'order', component: OrderComponent, canActivate: [AuthguardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landingpage', component: LandingpageComponent },
  {
    path: 'cart-list',
    component: CartListComponent,
    canActivate: [AuthguardService],
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'food-list', component: FoodListComponent },
  { path: 'food-add', component: FoodAddComponent },
  { path: 'food-details', component: FoodDetailsComponent },
  { path: 'food-details/:id', component: FoodDetailsComponent },
  { path: 'food-update', component: FoodUpdateComponent },
  { path: 'food-update/:id', component: FoodUpdateComponent },
  //{ path: 'employee-update/:id', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
