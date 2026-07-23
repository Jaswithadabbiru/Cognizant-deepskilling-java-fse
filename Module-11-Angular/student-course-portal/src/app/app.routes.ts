import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { CourseList } from './pages/course-list/course-list';
import { CourseForm } from './pages/course-form/course-form';
import { Users } from './pages/users/users';
import { authGuard } from './guards/auth-guard';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseDetail } from './pages/course-detail/course-detail';
import { NotFound } from './pages/not-found/not-found';
import { CourseInfo } from './pages/course-detail/course-info/course-info';
import { pendingChangesGuard } from './guards/pending-changes-guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
  path: 'About',
  loadComponent: () =>
    import('./pages/about/about').then(m => m.About)
},
  { path: 'courses', component: CourseList },
  {
  path: 'courses/:id',
  component: CourseDetail,
  children: [
    {
      path: 'info',
      component: CourseInfo
    }
  ]
},
  {
  path: 'course-form',
  loadComponent: () =>
    import('./pages/course-form/course-form').then(m => m.CourseForm),
  canActivate: [authGuard],
  canDeactivate: [pendingChangesGuard]
},
  {
  path: 'users',
  loadComponent: () =>
    import('./pages/users/users').then(m => m.Users),
    canActivate: [authGuard]
},
  { path: 'profile', component: StudentProfile },
  { path: '**', component: NotFound }
];
  