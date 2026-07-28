import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseSummary } from '../../components/course-summary/course-summary';
import { Notification } from '../../components/notification/notification';

import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course.actions';
import { selectCourses } from '../../store/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    CourseSummary,
    Notification
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {

    this.store.dispatch(loadCourses());

    this.courses$ = this.store.select(selectCourses);

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}