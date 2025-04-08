import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterServiceService } from '../../../services/router-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatePickerComponent } from "../../../components/mat-comp/form-fields/mat-date-picker/mat-date-picker.component";

@Component({
  selector: 'app-select-date-page',
  imports: [MatDatePickerComponent],
  templateUrl: './select-date-page.component.html',
  styleUrl: './select-date-page.component.css',
})
export class SelectDatePageComponent {
  constructor(private routerService: RouterServiceService) { }
  onTapNext() {
    this.routerService.navigateRelative(["user", "traveller", "select-location"]);
  }
}
