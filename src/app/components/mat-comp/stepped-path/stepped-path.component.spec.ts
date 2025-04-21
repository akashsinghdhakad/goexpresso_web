import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppedPathComponent } from './stepped-path.component';

describe('SteppedPathComponent', () => {
  let component: SteppedPathComponent;
  let fixture: ComponentFixture<SteppedPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteppedPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteppedPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
