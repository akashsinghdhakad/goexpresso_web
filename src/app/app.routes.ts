import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddressPageComponent } from './pages/parcel-pages/address-page/address-page.component';
import { ParcelPageComponent } from './pages/parcel-pages/parcel-page/parcel-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'address-page', component: AddressPageComponent },
    { path: 'parcel-page', component: ParcelPageComponent },
];


