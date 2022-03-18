import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTemperatureUnitComponent } from './toggle-temperature-unit.component';

describe('ToggleTemperatureUnitComponent', () => {
  let component: ToggleTemperatureUnitComponent;
  let fixture: ComponentFixture<ToggleTemperatureUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleTemperatureUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTemperatureUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
