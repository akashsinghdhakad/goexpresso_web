import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServiceTypeDetail } from '../../interfaces/service-type-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  listOfServices: ServiceTypeDetail[] = [
    {
      id: 1,
      title: 'Secure Handling',
      subtitle: 'Heading to another city? Take a parcel with you! Choose packages that fit your luggage, carry them along, and get paid.',
      buttonText: "Secure Handling",
      imgSrc: "./assets/services_img_1.JPG"
    },
    {
      id: 1,
      title: 'Simple & Flexible',
      subtitle: 'No complex processes, no hassle. Select the parcels that suit your trip, and enjoy seamless earnings while you’re on the move.',
      buttonText: "Track",
      imgSrc: "./assets/services_img_2.JPG"
    },
    {
      id: 1,
      title: 'Fast Delivery',
      subtitle: 'Get your packages delivered quickly and efficiently with our express service',
      buttonText: "Secure Handling",
      imgSrc: "./assets/services_img_3.JPG"
    },
  ];
}
