import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineLandingComponent } from './headline-landing.component';

describe('HeadlineLandingComponent', () => {
  let component: HeadlineLandingComponent;
  let fixture: ComponentFixture<HeadlineLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
