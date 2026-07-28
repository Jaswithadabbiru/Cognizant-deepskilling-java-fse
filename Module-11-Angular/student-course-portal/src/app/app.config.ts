import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore } from '@ngrx/store';
import { courseReducer } from './store/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
  provideBrowserGlobalErrorListeners(),

  provideRouter(routes),

  provideHttpClient(
    withInterceptors([
      loadingInterceptor,
      authInterceptor,
      errorHandlerInterceptor
    ])
  ),

  provideStore({
  courses: courseReducer,
  enrollment: enrollmentReducer
}),

provideEffects([
  CourseEffects
])

],
};
