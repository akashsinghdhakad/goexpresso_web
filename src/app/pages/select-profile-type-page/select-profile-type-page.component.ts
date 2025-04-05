import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-select-profile-type-page',
  imports: [MatToolbar, MatSidenavModule, MatButtonModule],
  templateUrl: './select-profile-type-page.component.html',
  styleUrl: './select-profile-type-page.component.css'
})
export class SelectProfileTypePageComponent implements OnInit {
  constructor(private authService: AuthService) { }

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
  showFiller = false;
}
