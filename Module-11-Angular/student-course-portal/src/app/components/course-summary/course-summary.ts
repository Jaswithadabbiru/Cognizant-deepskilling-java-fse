import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary.html',
  styleUrl: './course-summary.css'
})
export class CourseSummary {

  @Input() courses: Course[] = [];

  get totalCourses(): number {
    return this.courses.length;
  }

  get totalCredits(): number {
    return this.courses.reduce((sum, course) => sum + course.credits, 0);
  }

  get passedCourses(): number {
    return this.courses.filter(c => c.gradeStatus === 'passed').length;
  }

}