import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';
import { CourseState } from './course-state';

export const initialState: CourseState = {

  courses: [],

  loading: false,

  error: null

};

export const courseReducer = createReducer(

  initialState,

  on(CourseActions.loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))

);