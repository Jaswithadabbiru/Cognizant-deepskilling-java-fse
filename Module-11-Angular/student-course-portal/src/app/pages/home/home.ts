import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  coursesCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.coursesCount = this.courseService.getCourses().length;
    console.log('HomeComponent initialized - courses loaded');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

}