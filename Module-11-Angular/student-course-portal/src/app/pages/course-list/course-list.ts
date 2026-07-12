import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseSummary } from '../../components/course-summary/course-summary';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    CourseSummary
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    setTimeout(() => {

      this.courses = this.courseService.getCourses();

      this.isLoading = false;

    },150);

  }

  trackByCourseId(index:number,course:Course){

    return course.id;

  }

}