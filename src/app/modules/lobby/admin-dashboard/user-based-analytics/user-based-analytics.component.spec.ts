import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasedAnalyticsComponent } from './user-based-analytics.component';

describe('UserBasedAnalyticsComponent', () => {
  let component: UserBasedAnalyticsComponent;
  let fixture: ComponentFixture<UserBasedAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasedAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBasedAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
