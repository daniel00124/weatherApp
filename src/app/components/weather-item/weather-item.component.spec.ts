import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemComponent } from './weather-item.component';

describe('WeatherItemComponent', () => {
  let component: WeatherItemComponent;
  let fixture: ComponentFixture<WeatherItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherItemComponent]
    });
    fixture = TestBed.createComponent(WeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
