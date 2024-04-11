import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TourTypesPage } from './tour-types.page';

describe('TourTypesPage', () => {
  let component: TourTypesPage;
  let fixture: ComponentFixture<TourTypesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
