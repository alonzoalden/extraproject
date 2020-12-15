import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsDashboardComponent } from './dashboard.component';

describe('ShipmentsDashboardComponent', () => {
  let component: ShipmentsDashboardComponent;
  let fixture: ComponentFixture<ShipmentsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
