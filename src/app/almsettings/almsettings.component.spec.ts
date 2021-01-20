import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmsettingsComponent } from './almsettings.component';

describe('AlmsettingsComponent', () => {
  let component: AlmsettingsComponent;
  let fixture: ComponentFixture<AlmsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
