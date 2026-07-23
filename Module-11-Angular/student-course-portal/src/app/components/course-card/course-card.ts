import { Component, Input } from '@angular/core';
import {
  CommonModule,
  NgClass,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from '@angular/common';
import { Router } from '@angular/router';

import { Course } from '../../models/course.model';
import { CreditPipe } from '../../pipes/credit-pipe';
import { Highlight } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditPipe,
    Highlight,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  isExpanded = false;

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  get enrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  get cardClasses() {
    return {
      passed: this.course.gradeStatus === 'passed',
      failed: this.course.gradeStatus === 'failed',
      pending: this.course.gradeStatus === 'pending'
    };
  }

  toggleEnroll() {
    if (this.enrolled) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  viewDetails() {
  this.router.navigate(
    ['/courses', this.course.id],
    {
      queryParams: {
        mode: 'view'
      }
    }
  );
}

}