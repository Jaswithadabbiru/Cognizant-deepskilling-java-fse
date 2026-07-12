import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { CourseList } from './pages/course-list/course-list';
import { CourseForm } from './pages/course-form/course-form';
import { Users } from './pages/users/users';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: CourseList },
  { path: 'about', component: About },
  { path: 'course-form', component: CourseForm, canActivate: [authGuard] },
  { path: 'users', component: Users, canActivate: [authGuard] }
];
  