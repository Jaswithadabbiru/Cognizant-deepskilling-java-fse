import { Course } from '../models/course.model';

export interface CourseState {

  courses: Course[];

  loading: boolean;

  error: string | null;

}