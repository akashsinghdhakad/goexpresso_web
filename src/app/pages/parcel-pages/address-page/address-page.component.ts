import { Component, EventEmitter, Output } from '@angular/core';
import { RouterServiceService } from '../../../services/router-service.service';



@Component({
  selector: 'app-address-page',
  imports: [],
  templateUrl: './address-page.component.html',
  styleUrl: './address-page.component.css'
})
export class AddressPageComponent {
constructor(private routerService: RouterServiceService){};

  someFunction() {
    console.log('Function in AddressPageComponent called!');
  }
  @Output() notifyParent = new EventEmitter<void>();

  triggerParentFunction() {
    this.notifyParent.emit();
  }

  onTapNext() {
    this.routerService.navigateRelative(["user", "parcel","package-details"]);
  }
}
