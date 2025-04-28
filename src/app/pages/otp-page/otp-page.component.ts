import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterServiceService } from '../../services/router-service.service';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  imports: [MatButtonModule],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.css'
})
export class OtpPageComponent {

  constructor(private routerService: RouterServiceService, private authService: AuthService, private snackBar: SnackbarService) { }

  ngOnInit() {
    const navigationState = this.routerService.getCurrentNavigationState();

    if (navigationState) {
      this.mobileNumber = navigationState['mobileNumber'];  
    }
  }

  mobileNumber: string | null = null;

  otp = '';
  isLoading = false;

  onClickVerifyOpt() {
    this.verifyOTP({ mobile: this.mobileNumber, otp: this.otp })
  }

  navigateToUserPage() {
    this.routerService.navigateTo('/user');
  }

  verifyOTP(input: { mobile: string | null; otp: string }): void {
    this.isLoading = true;
    this.authService.verifyOTP(input).subscribe({
      next: (success) => {
        this.isLoading = false;
        if (success) {
          this.snackBar.showMessage("OTP Verified Successfully");
          this.navigateToUserPage()
        } else {
          this.snackBar.showMessage("OTP verification failed. Please try again");
        }
      },
      error: (err) => {
        this.isLoading = false;
      }
    });
  }
}
