import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-spinner',
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.css'
})
export class ProgressSpinnerComponent {
  constructor(private loadingService: LoadingService) { }
  get loading() {
    return this.loadingService.loading$;
  }
  
}
