import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar-login',
  imports: [MatToolbar, MatSidenavModule,MatIconModule],
  templateUrl: './navbar-login.component.html',
  styleUrl: './navbar-login.component.css'
})
export class NavbarLoginComponent {

  showFiller = false;
}
