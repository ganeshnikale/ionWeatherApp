import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficPage } from './trafic.page';

describe('TraficPage', () => {
  let component: TraficPage;
  let fixture: ComponentFixture<TraficPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
