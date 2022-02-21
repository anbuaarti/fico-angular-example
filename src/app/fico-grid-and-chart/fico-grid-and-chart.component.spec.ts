import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicoGridAndChartComponent } from './fico-grid-and-chart.component';

describe('FicoGridAndChartComponent', () => {
  let component: FicoGridAndChartComponent;
  let fixture: ComponentFixture<FicoGridAndChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicoGridAndChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicoGridAndChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
