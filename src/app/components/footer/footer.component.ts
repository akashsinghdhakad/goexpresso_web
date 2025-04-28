import { Component } from '@angular/core';
import { SocialMediaDetail } from '../../interfaces/social-media-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinkList: SocialMediaDetail[] = [
    {
      id: 1,
      altText: "facebook_icon",
      iconSrc: "./assets/icons/facebook_icon.svg",
      link:"https://www.facebook.com/share/1KNtqCuuZB/"
    },
    {
      id: 2,
      altText: "instagram_icon",
      iconSrc: "./assets/icons/instagram_icon.svg",
      link:"https://www.instagram.com/goexpresso.in"
    },
    {
      id: 3,
      altText: "linkedin_icon",
      iconSrc: "./assets/icons/linkedin_icon.svg",
      link:"https://www.linkedin.com/company/goexpresso/"
    },
    {
      id: 4,
      altText: "youtube_icon",
      iconSrc: "./assets/icons/youtube_icon.svg",
      link:"https://youtube.com/@goexpresso-in?si=yHzuwIu1p4W4KIlw"
    },
    {
      id: 5,
      altText: "twitter_icon",
      iconSrc: "./assets/icons/twitter_icon.svg",
      link:"https://x.com/GoexpressoIndia"
    },
  ];
}
