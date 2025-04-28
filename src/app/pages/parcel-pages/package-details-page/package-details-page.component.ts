import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ParcelPackageDetailsOption } from '../../../interfaces/parcel-package-details-option';
import { CommonModule } from '@angular/common';
import { RouterServiceService } from '../../../services/router-service.service';

@Component({
  selector: 'app-package-details-page',
  imports: [CommonModule, MatIconModule],
  templateUrl: './package-details-page.component.html',
  styleUrl: './package-details-page.component.css'
})
export class PackageDetailsPageComponent {
  constructor(private routerService: RouterServiceService) { };

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

  onTapNext() {
    this.routerService.navigateRelative(["user", "parcel", "schedule"]);
  }
}
