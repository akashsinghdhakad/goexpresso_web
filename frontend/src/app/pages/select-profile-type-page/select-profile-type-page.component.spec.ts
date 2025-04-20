import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfileTypePageComponent } from './select-profile-type-page.component';

describe('SelectProfileTypePageComponent', () => {
  let component: SelectProfileTypePageComponent;
  let fixture: ComponentFixture<SelectProfileTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectProfileTypePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProfileTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
