import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactMeComponent } from './footer-contact-me.component';

describe('FooterContactMeComponent', () => {
  let component: FooterContactMeComponent;
  let fixture: ComponentFixture<FooterContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
