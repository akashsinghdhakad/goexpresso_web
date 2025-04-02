import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
@Component({
  selector: 'app-on-off-duty-page',
  imports: [FormsModule,MatSlideToggleModule],
  templateUrl: './on-off-duty-page.component.html',
  styleUrl: './on-off-duty-page.component.css'
})
export class OnOffDutyPageComponent {
  isChecked = true;
}
