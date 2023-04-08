import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PasswordMatchDirective } from './_validators';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FooditemsService } from './services/fooditems.service';
import { UsersService } from './services/users.service';
import { AdminService } from './services/admin.service';
import { FoodUpdateComponent } from './food-update/food-update.component';
@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    OrderComponent,
    RegisterComponent,
    LoginComponent,
    PasswordMatchDirective,
    LandingpageComponent,
    CartListComponent,
    CheckoutComponent,
    SuccessComponent,
    FoodListComponent,
    FoodAddComponent,
    FoodDetailsComponent,
    FoodUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FooditemsService, UsersService, AdminService],
  bootstrap: [MainComponent],
})
export class AppModule {}
