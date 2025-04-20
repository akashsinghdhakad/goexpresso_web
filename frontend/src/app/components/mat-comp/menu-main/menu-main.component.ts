import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-main',
  imports: [RouterLink,MatButtonModule, MatMenuModule],
  templateUrl: './menu-main.component.html',
  styleUrl: './menu-main.component.css'
})
export class MenuMainComponent {

}
