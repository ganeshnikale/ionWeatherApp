import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePalcesPage } from './favorite-palces.page';

describe('FavoritePalcesPage', () => {
  let component: FavoritePalcesPage;
  let fixture: ComponentFixture<FavoritePalcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePalcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePalcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
