import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
 
@Component({
  selector: 'app-add-pickup-address-page',
  imports: [ MatChipsModule],
  templateUrl: './add-pickup-address-page.component.html',
  styleUrl: './add-pickup-address-page.component.css'
})
export class AddPickupAddressPageComponent {
  readonly addressTypeList: string[] = ['Home', 'Office', 'Other'];
}
