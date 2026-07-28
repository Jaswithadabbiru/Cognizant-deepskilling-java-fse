import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound } from './not-found';
import { provideRouter } from '@angular/router';
import { App } from '../../app';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [App],
  providers: [
    provideRouter([])
  ]
}).compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
