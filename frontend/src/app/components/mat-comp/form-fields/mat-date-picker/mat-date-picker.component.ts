import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-date-picker',
  imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './mat-date-picker.component.html',
  styleUrl: './mat-date-picker.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatDatePickerComponent {

}
