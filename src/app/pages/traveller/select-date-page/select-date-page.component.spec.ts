import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatePageComponent } from './select-date-page.component';

describe('SelectDatePageComponent', () => {
  let component: SelectDatePageComponent;
  let fixture: ComponentFixture<SelectDatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
