import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Member2Page } from './member2.page';

describe('Member2Page', () => {
  let component: Member2Page;
  let fixture: ComponentFixture<Member2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Member2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
