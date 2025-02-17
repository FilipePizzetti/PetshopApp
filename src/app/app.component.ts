import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PetsPageComponent } from './pets-page/pets-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            NavbarComponent,
            LoginPageComponent,
            ResetPasswordPageComponent,
            SignupPageComponent,
            PetsPageComponent,
            ProductsPageComponent,
            CartPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petshop';
}
