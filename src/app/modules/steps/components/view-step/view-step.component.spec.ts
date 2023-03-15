import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStepComponent } from './view-step.component';

describe('ViewStepComponent', () => {
  let component: ViewStepComponent;
  let fixture: ComponentFixture<ViewStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
