import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelPageComponent } from './parcel-page.component';

describe('ParcelPageComponent', () => {
  let component: ParcelPageComponent;
  let fixture: ComponentFixture<ParcelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
