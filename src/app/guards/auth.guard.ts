import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterServiceService } from '../services/router-service.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routerService = inject(RouterServiceService);


  // authService.isLoggedIn().subscribe(isLoggedIn => {
  //   if (isLoggedIn) {
  //     return true;
  //   }else{
  //     routerService.navigateTo("/login");
  //     return false;
  //   }
  // });

  // const isLoggedIn = authService.isLoggedIn();

  // if (isLoggedIn) {
  //   return true;
  // } else {
  //   // Redirect to login page if not logged in
  //   routerService.navigateTo("/login");
  //   return false;
  // }

  // return authService.isLoggedIn().pipe(take(1)
  // ).toPromise().then((isLoggedIn) => {
  //   if (isLoggedIn) {
  //     return true;
  //   } else {
  //     routerService.navigateTo("/login");
  //     return false;
  //   }
  // });

  return authService.isLoggedIn().pipe(
    take(1),
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        routerService.navigateTo("/login");
        return false;
      }
    })
  );
};
