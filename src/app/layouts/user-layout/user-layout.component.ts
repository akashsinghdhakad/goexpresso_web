import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterServiceService } from '../../services/router-service.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule,MatIconModule, MatToolbar, MatSidenavModule, MatButtonModule, RouterOutlet], templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  constructor(private location: Location, private router: Router, private routerService: RouterServiceService) { }

  showFiller = false;

  showBackButton = false;


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkForBackButton();
      }
    });
  }

  checkForBackButton() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
    
    if (currentUrl.includes('/user/') && !currentUrl.includes('select-profile-type')) {
      this.showBackButton = true;
    } else {
      this.showBackButton = false;
    }
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/user']);
    }
  }

  navigateToProfilePage() {
    this.routerService.navigateTo('/user/profile');
  }
}
