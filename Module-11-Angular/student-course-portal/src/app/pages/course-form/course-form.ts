import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseForm {

  courseForm = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseCode: new FormControl('', Validators.required),
    credits: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.courseForm.value);
    alert('Course Added Successfully!');
  }

}