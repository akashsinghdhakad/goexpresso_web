import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarMainComponent } from './components/mat-comp/navbar-main/navbar-main.component';

@Component({
  selector: 'app-root',
  imports: [NavbarMainComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'goexpresso';
}
