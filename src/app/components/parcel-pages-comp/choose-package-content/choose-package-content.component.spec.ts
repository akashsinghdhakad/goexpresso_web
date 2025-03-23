import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePackageContentComponent } from './choose-package-content.component';

describe('ChoosePackageContentComponent', () => {
  let component: ChoosePackageContentComponent;
  let fixture: ComponentFixture<ChoosePackageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePackageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePackageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
