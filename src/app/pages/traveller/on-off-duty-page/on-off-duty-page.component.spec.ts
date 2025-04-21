import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffDutyPageComponent } from './on-off-duty-page.component';

describe('OnOffDutyPageComponent', () => {
  let component: OnOffDutyPageComponent;
  let fixture: ComponentFixture<OnOffDutyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnOffDutyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnOffDutyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
