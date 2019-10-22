import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecommendedComponent } from './dashboard-recommended.component';

describe('DashboardRecommendedComponent', () => {
  let component: DashboardRecommendedComponent;
  let fixture: ComponentFixture<DashboardRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
