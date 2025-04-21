import { Component } from '@angular/core';
import { RouterServiceService } from '../../../services/router-service.service';

@Component({
  selector: 'app-select-location-page',
  imports: [],
  templateUrl: './select-location-page.component.html',
  styleUrl: './select-location-page.component.css'
})
export class SelectLocationPageComponent {
  constructor(private routerService: RouterServiceService ){}
  onTapNext() {
    this.routerService.navigateRelative(["user", "traveller", "detail"]);
  }
}
