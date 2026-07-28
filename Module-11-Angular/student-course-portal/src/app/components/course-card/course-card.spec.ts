import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { vi } from 'vitest';

import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let enrollmentService: EnrollmentService;
  let router: Router;

  const mockCourse: Course = {
    id: 1,
    code: 'CS101',
    name: 'Data Structures',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        EnrollmentService,
        provideRouter([]),
        provideMockStore({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    enrollmentService = TestBed.inject(EnrollmentService);
    router = TestBed.inject(Router);

    component.course = mockCourse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive @Input course', () => {
    expect(component.course.name).toBe('Data Structures');
  });

  it('should enroll when toggleEnroll() is called', () => {
    const enrollSpy = vi.spyOn(enrollmentService, 'enroll');

    component.toggleEnroll();

    expect(enrollSpy).toHaveBeenCalledWith(1);
  });

  it('should return correct card class', () => {
    expect(component.cardClasses.passed).toBe(true);
  });

  it('should navigate to course details', () => {
    const navigateSpy = vi.spyOn(router, 'navigate');

    component.viewDetails();

    expect(navigateSpy).toHaveBeenCalledWith(
      ['/courses', 1],
      {
        queryParams: {
          mode: 'view'
        }
      }
    );
  });
});