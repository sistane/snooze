import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogapageComponent } from './yogapage.component';

describe('YogapageComponent', () => {
  let component: YogapageComponent;
  let fixture: ComponentFixture<YogapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
