import { Routes } from '@angular/router';
import { Container } from './Components/container/container';
import { Notfound } from './Components/notfound/notfound';
import { Aboutus } from './Components/aboutus/aboutus';
import { Details } from './Components/details/details';
import { NewProduct } from './Components/new-product/new-product';
import { Registration } from './Components/user-registration/user-registration';
import { LoginComponent } from './Components/login/login';
import { routeGuard } from './Guards/route-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Container },
  { path: 'about', component: Aboutus },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Registration },
  { path: 'details/:id', component: Details },
  { path: 'insertProduct', component: NewProduct, canActivate: [routeGuard] },
  { path: 'updateProduct/:id', component: NewProduct, canActivate: [routeGuard] },
  { path: '**', component: Notfound },
];
