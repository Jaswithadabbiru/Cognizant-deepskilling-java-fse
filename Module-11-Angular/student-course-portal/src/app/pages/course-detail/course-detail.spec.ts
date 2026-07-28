import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { CourseDetail } from './course-detail';
import { CourseService } from '../../services/course';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              },
              queryParamMap: {
                get: () => ''
              }
            }
          }
        },
        {
          provide: CourseService,
          useValue: {
            getCourseById: () =>
              of({
                id: 1,
                name: 'Angular',
                code: 'ANG101',
                credits: 3,
                gradeStatus: 'passed'
              })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});