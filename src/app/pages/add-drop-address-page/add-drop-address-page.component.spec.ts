import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDropAddressPageComponent } from './add-drop-address-page.component';

describe('AddDropAddressPageComponent', () => {
  let component: AddDropAddressPageComponent;
  let fixture: ComponentFixture<AddDropAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDropAddressPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDropAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
