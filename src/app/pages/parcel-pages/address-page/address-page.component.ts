import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-address-page',
  imports: [],
  templateUrl: './address-page.component.html',
  styleUrl: './address-page.component.css'
})
export class AddressPageComponent {
  someFunction() {
    console.log('Function in AddressPageComponent called!');
  }
  @Output() notifyParent = new EventEmitter<void>();

  triggerParentFunction() {
    this.notifyParent.emit(); // Notify the parent component
  }
}
