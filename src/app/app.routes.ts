import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddressPageComponent } from './pages/parcel-pages/address-page/address-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ParcelPageComponent } from './pages/parcel-pages/parcel-page/parcel-page.component';
import { AddPickupAddressPageComponent } from './pages/add-pickup-address-page/add-pickup-address-page.component';
import { AddDropAddressPageComponent } from './pages/add-drop-address-page/add-drop-address-page.component';
 import { SelectPackagingComponent } from './components/parcel-pages-comp/select-packaging/select-packaging.component';
import { ChooseParcelWeightComponent } from './components/parcel-pages-comp/choose-parcel-weight/choose-parcel-weight.component';
import { ChoosePackageContentComponent } from './components/parcel-pages-comp/choose-package-content/choose-package-content.component';
import { PackageValueComponent } from './components/parcel-pages-comp/package-value/package-value.component';
  
export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'address-page', component: AddressPageComponent },
    { path: 'parcel-page', component: ParcelPageComponent },
    { path: 'add-pickup-address', component: AddPickupAddressPageComponent },
    { path: 'add-drop-address', component: AddDropAddressPageComponent },
    { path: 'select-packaging', component: SelectPackagingComponent },
    { path: 'choose-parcel-weight', component: ChooseParcelWeightComponent },
    { path: 'choose-package-content', component: ChoosePackageContentComponent },
    { path: 'package-value', component: PackageValueComponent },
 ];


