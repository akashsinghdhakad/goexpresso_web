import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarMainComponent } from './components/mat-comp/navbar-main/navbar-main.component';
import { ProgressSpinnerComponent } from "./components/mat-comp/progress-spinner/progress-spinner.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarMainComponent, RouterOutlet, ProgressSpinnerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'goexpresso';
}
