import { ChangeDetectionStrategy,Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-notification-page',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule,MatCardModule],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationPageComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
