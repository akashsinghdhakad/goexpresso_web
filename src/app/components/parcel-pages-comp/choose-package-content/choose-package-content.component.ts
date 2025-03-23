import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choose-package-content',
  imports: [RouterLink,MatChipsModule,MatIconModule],
  templateUrl: './choose-package-content.component.html',
  styleUrl: './choose-package-content.component.css'
})
export class ChoosePackageContentComponent {
  readonly packageTypeList: string[] = ['Books & Documents', 'Clothes & Personal Items', 'Consumables','Household Items','Others, please specify'];
}
