import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterServiceService } from '../../services/router-service.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckbox, MatButtonModule, ReactiveFormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private routerService: RouterServiceService, private fb: FormBuilder, private snackBar: SnackbarService) { }


  otpForm!: FormGroup;
  isLoading = false;

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')] // Only numbers, 10 digits
      ],
      acceptPolicy: [false, Validators.requiredTrue] // Ensures the user accepts the policy
    });
  }

  onClickSendOTP(): void {
    if (this.otpForm.valid) {
      const mobileNumber = this.otpForm.value.mobileNumber;
      this.sendOTP(mobileNumber);
    } else {
    }
  }



  sendOTP(mobileNumber: string): void {
    this.isLoading = true;
    this.authService.sendOTP({ mobile: mobileNumber }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.snackBar.showMessage(response.message);
        if (response.status) {
          this.navigateToVerifyOtpPage()
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  navigateToVerifyOtpPage() {
    // this.routerService.navigateTo('/verify-otp');
    // this.routerService.navigateTo('/verify-otp', { mobileNumber: this.otpForm.value.mobileNumber });
    this.routerService.navigateToWithState('/verify-otp', { mobileNumber: this.otpForm.value.mobileNumber });
  }

}
