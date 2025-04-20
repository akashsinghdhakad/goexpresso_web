import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseParcelWeightComponent } from './choose-parcel-weight.component';

describe('ChooseParcelWeightComponent', () => {
  let component: ChooseParcelWeightComponent;
  let fixture: ComponentFixture<ChooseParcelWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseParcelWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseParcelWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
