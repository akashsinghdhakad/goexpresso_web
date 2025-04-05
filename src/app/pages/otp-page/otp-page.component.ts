import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterServiceService } from '../../services/router-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-otp-page',
  imports: [MatButtonModule],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.css'
})
export class OtpPageComponent {

  constructor(private routerService: RouterServiceService, private authService: AuthService) { }

  onClickVerifyOpt() {
    this.login()
  }

  login() {
    this.authService.login();
    this.routerService.navigateTo('user/select-profile-type');
  }
}
