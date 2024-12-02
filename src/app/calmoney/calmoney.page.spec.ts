import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalmoneyPage } from './calmoney.page';

describe('CalmoneyPage', () => {
  let component: CalmoneyPage;
  let fixture: ComponentFixture<CalmoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
