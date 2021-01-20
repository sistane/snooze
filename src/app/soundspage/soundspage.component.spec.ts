import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundspageComponent } from './soundspage.component';

describe('SoundspageComponent', () => {
  let component: SoundspageComponent;
  let fixture: ComponentFixture<SoundspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
