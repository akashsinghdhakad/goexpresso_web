import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { RouterServiceService } from '../../../services/router-service.service';
import { MenuMainComponent } from "../menu-main/menu-main.component";

@Component({
  selector: 'app-navbar-main',
  imports: [MatToolbar, MatButtonModule, MatIconModule, RouterLink, MenuMainComponent],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent {

  constructor(private routerService : RouterServiceService){}

  navigateToLoginPage() {
    this.routerService.navigateTo('/login');
  }
  navigateToSignUpPage() {
    this.routerService.navigateTo('/signup');
  }

}
