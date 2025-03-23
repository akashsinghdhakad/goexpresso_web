import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-packaging',
  imports: [RouterLink,MatChipsModule,MatIconModule],
  templateUrl: './select-packaging.component.html',
  styleUrl: './select-packaging.component.css'
})
export class SelectPackagingComponent {
  readonly packageTypeList: string[] = ['Envelope / Pouch', 'Box / Carton', 'Suitcase / Luggage','Backpack / Hand Bag','Other'];

}
