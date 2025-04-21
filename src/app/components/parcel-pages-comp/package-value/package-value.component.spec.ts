import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageValueComponent } from './package-value.component';

describe('PackageValueComponent', () => {
  let component: PackageValueComponent;
  let fixture: ComponentFixture<PackageValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
