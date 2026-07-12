import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() {}

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 3,
        gradeStatus: 'passed'
      },
      {
        id: 2,
        name: 'Java',
        code: 'JAVA201',
        credits: 4,
        gradeStatus: 'pending'
      },
      {
        id: 3,
        name: 'Spring Boot',
        code: 'SPR301',
        credits: 5,
        gradeStatus: 'failed'
      }
    ];
  }
}