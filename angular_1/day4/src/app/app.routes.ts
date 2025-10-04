import { Routes } from '@angular/router';
import { Container } from './Components/container/container';
import { Notfound } from './Components/notfound/notfound';
import { Aboutus } from './Components/aboutus/aboutus';
import { Details } from './Components/details/details';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Container},
    {path: 'about', component: Aboutus},
    {path: 'details/:id', component: Details},
    {path: '**', component: Notfound}
];
