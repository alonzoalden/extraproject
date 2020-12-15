import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsDashboardComponent } from './dashboard.component';

describe('ClaimsDashboardComponent', () => {
  let component: ClaimsDashboardComponent;
  let fixture: ComponentFixture<ClaimsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
