import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddressPageComponent } from './pages/parcel-pages/address-page/address-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ParcelPageComponent } from './pages/parcel-pages/parcel-page/parcel-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'address-page', component: AddressPageComponent },
    { path: 'parcel-page', component: ParcelPageComponent },
];


