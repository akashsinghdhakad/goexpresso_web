import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ParcelPackageDetailsOption } from '../../../models/parcel-package-details-option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pickup-parcel-page',
  imports: [FormsModule,MatSlideToggleModule,MatIconModule,CommonModule],
  templateUrl: './pickup-parcel-page.component.html',
  styleUrl: './pickup-parcel-page.component.css'
})
export class PickupParcelPageComponent {
  isChecked = true;
   parcelPackageDetailsOptionList: ParcelPackageDetailsOption[] = [
      {
        id: 1,
        title: 'Select Packaging',
        icon: 'view_in_ar',
        subtitle: 'Box / Carton'
      },
      {
        id: 2,
        title: 'Choose Parcel Weight',
        icon: 'attach_money',
        subtitle: '0.5 Kg - 2 Kg E',
      },
      {
        id: 3,
        title: 'Choose Package Content',
        icon: 'view_in_ar',
        subtitle: 'Clothes & Personal Items',
      },
      {
        id: 4, 
        title: 'Delhivery Protect',
      },
  
    ];
}
