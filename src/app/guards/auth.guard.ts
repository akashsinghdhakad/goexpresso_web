import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterServiceService } from '../services/router-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routerService = inject(RouterServiceService);
 
  const isLoggedIn = authService.isLoggedIn();
 
  if (isLoggedIn) {
    return true;
  } else {
    // Redirect to login page if not logged in
    routerService.navigateTo("/login");
    return false;
  }
};
