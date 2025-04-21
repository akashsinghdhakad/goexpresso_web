import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private router: Router) { }

  routerEvent() {
    return this.router.events;
  }
  navigateToTarget() {
    // Navigate to '/target-route'
    this.router.navigate(['/target-route']);
  }

  // Navigate to a route with optional parameters
  navigateTo(route: string, queryParams?: any, extras?: NavigationExtras) {
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams,
      ...extras
    };
    this.router.navigate([route], navigationExtras);
  }

  // Navigate to a route using an array of path segments (for relative navigation)
  navigateRelative(route: string[], queryParams?: any, extras?: NavigationExtras) {
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams,
      ...extras
    };
    this.router.navigate(route, navigationExtras);
  }

  // Navigate to a route and replace the current history entry
  navigateAndReplace(route: string, queryParams?: any, extras?: NavigationExtras) {
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams,
      replaceUrl: true,
      ...extras
    };
    this.router.navigate([route], navigationExtras);
  }

  // Navigate to a route with parameters
  navigateWithParams(route: string, params: any, queryParams?: any) {
    const navigationPath = [route, ...params];
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams,
    };
    this.router.navigate(navigationPath, navigationExtras);
  }

  navigateWithParamsWithRecord(route: string, params: string[], queryParams?: Record<string, any>) {
    const navigationPath = [route, ...params];
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams,
    };
    this.router.navigate(navigationPath, navigationExtras);
  }

}
