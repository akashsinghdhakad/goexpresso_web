import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPackagingComponent } from './select-packaging.component';

describe('SelectPackagingComponent', () => {
  let component: SelectPackagingComponent;
  let fixture: ComponentFixture<SelectPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPackagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
