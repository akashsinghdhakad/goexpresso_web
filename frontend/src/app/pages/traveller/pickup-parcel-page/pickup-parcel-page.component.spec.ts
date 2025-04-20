import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupParcelPageComponent } from './pickup-parcel-page.component';

describe('PickupParcelPageComponent', () => {
  let component: PickupParcelPageComponent;
  let fixture: ComponentFixture<PickupParcelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupParcelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupParcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
