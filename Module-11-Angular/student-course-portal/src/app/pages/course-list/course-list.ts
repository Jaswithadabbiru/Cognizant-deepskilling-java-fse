import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseSummary } from '../../components/course-summary/course-summary';
import { Notification } from '../../components/notification/notification';

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

  isLoading = true;

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (data) => {

        this.courses = data;
        this.isLoading = false;

      },

      error: (err) => {

        console.error(err);
        this.isLoading = false;

      }

    });

  }

  trackByCourseId(index: number, course: Course) {

    return course.id;

  }

}