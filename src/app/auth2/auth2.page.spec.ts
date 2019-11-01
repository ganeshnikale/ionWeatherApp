import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth2Page } from './auth2.page';

describe('Auth2Page', () => {
  let component: Auth2Page;
  let fixture: ComponentFixture<Auth2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
