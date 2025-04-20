import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { RouterServiceService } from '../../../services/router-service.service';
import { MenuMainComponent } from "../menu-main/menu-main.component";
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-main',
  imports: [CommonModule,MatToolbar, MatButtonModule, MatIconModule, RouterLink, MenuMainComponent],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent implements OnInit {

  constructor(private authService: AuthService, private routerService: RouterServiceService) { }

  isLoggedIn: boolean = false;
  
  ngOnInit() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  navigateToLoginPage() {
    this.routerService.navigateTo('/login');
  }
  navigateToSignUpPage() {
    this.routerService.navigateTo('/signup');
  }

}
