import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEventAnalyticsComponent } from './post-event-analytics.component';

describe('PostEventAnalyticsComponent', () => {
  let component: PostEventAnalyticsComponent;
  let fixture: ComponentFixture<PostEventAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEventAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEventAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
