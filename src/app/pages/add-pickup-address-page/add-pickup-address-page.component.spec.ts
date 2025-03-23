import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickupAddressPageComponent } from './add-pickup-address-page.component';

describe('AddPickupAddressPageComponent', () => {
  let component: AddPickupAddressPageComponent;
  let fixture: ComponentFixture<AddPickupAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPickupAddressPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPickupAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
