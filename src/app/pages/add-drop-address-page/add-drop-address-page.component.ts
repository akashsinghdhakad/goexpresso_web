import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-add-drop-address-page',
  imports: [MatChipsModule],
  templateUrl: './add-drop-address-page.component.html',
  styleUrl: './add-drop-address-page.component.css'
})
export class AddDropAddressPageComponent {
  readonly addressTypeList: string[] = ['Home', 'Office', 'Other'];
}
