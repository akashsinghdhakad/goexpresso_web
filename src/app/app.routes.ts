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
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { NotificationPageComponent } from './pages/traveller/notification-page/notification-page.component';
import { OnOffDutyPageComponent } from './pages/traveller/on-off-duty-page/on-off-duty-page.component';
import { PickupParcelPageComponent } from './pages/traveller/pickup-parcel-page/pickup-parcel-page.component';
import { SelectProfileTypePageComponent } from './pages/select-profile-type-page/select-profile-type-page.component';
import { authGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PackageDetailsPageComponent } from './pages/parcel-pages/package-details-page/package-details-page.component';
import { SchedulePageComponent } from './pages/parcel-pages/schedule-page/schedule-page.component';
import { SummaryPageComponent } from './pages/parcel-pages/summary-page/summary-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'verify-otp', component: OtpPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'parcel-page', component: ParcelPageComponent },
    { path: 'add-pickup-address', component: AddPickupAddressPageComponent },
    { path: 'add-drop-address', component: AddDropAddressPageComponent },
    { path: 'on-off-duty', component: OnOffDutyPageComponent },
    { path: 'pickup-parcel', component: PickupParcelPageComponent },
    {
        path: 'user',
        component: UserLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'select-profile-type', pathMatch: 'full' },
            { path: 'select-profile-type', component: SelectProfileTypePageComponent, canActivate: [authGuard] },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'notification', component: NotificationPageComponent },
            {
                path: 'parcel',
                // component: ParcelPageComponent,
                children: [
                    { path: '', redirectTo: 'address', pathMatch: 'full' },
                    { path: 'address', component: AddressPageComponent },
                    { path: 'package-details', component: PackageDetailsPageComponent },
                    { path: 'schedule', component: SchedulePageComponent },
                    { path: 'summary', component: SummaryPageComponent },
                    { path: 'select-packaging', component: SelectPackagingComponent },
                    { path: 'choose-parcel-weight', component: ChooseParcelWeightComponent },
                    { path: 'choose-package-content', component: ChoosePackageContentComponent },
                    { path: 'package-value', component: PackageValueComponent },
                ],
            },
        ],
    },
];


