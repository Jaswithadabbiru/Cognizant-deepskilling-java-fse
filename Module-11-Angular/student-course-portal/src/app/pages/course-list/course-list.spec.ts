import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CourseList } from './course-list';

describe('CourseList', () => {
  let component: CourseList;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
  provideMockStore({
    initialState: {
      courses: {
        courses: [],
        loading: false,
        error: null
      }
    }
  })
]
    }).compileComponents();

    const fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});