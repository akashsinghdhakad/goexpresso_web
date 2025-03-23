import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choose-parcel-weight',
  imports: [RouterLink,MatChipsModule,MatIconModule],

  templateUrl: './choose-parcel-weight.component.html',
  styleUrl: './choose-parcel-weight.component.css'
})
export class ChooseParcelWeightComponent {
  readonly packageTypeList: string[] = ['0.5 Kg - 2 Kg', '2 Kg - 5 Kg', '5 Kg - 8 K','8 Kg - 10 Kg'];

}
