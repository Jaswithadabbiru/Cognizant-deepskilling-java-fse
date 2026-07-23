import { CanDeactivateFn } from '@angular/router';
import { CourseForm } from '../pages/course-form/course-form';

export const pendingChangesGuard: CanDeactivateFn<CourseForm> = () => {
  return confirm('Leave this page? Unsaved changes will be lost.');
};