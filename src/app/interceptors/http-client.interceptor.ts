import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { LoadingService } from '../services/loading.service';

export const httpClientInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbarService = inject(SnackbarService);
  const loadingService = inject(LoadingService);

  // Show the loading spinner
  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 422 && error.error?.errors) {
        console.error('Laravel Validation Error:', error.error.errors);
        snackbarService.showMessage(error.error.message);
      } else if (error.status === 401) {
        console.error('Unauthorized - possibly token expired');
      } else if (error.status >= 500) {
        console.error('Server error:', error.message);
      }
      loadingService.hide();
      return throwError(() => error);
    })
  );
};
