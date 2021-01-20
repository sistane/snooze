import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekcompComponent } from './weekcomp.component';

describe('WeekcompComponent', () => {
  let component: WeekcompComponent;
  let fixture: ComponentFixture<WeekcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
