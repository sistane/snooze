import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalpageComponent } from './physicalpage.component';

describe('PhysicalpageComponent', () => {
  let component: PhysicalpageComponent;
  let fixture: ComponentFixture<PhysicalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
