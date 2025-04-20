import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterServiceService } from '../../services/router-service.service';
import { CommonModule, Location } from '@angular/common';
import { PageTitle } from '../../models/page-title';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule, MatIconModule, MatToolbar, MatSidenavModule, MatButtonModule, RouterOutlet], templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private routerService: RouterServiceService) { }


  ngOnInit() {
    this.setPageTitle();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkForBackButton();
        this.setPageTitle();
      }
    });

  }

  showFiller = false;
  showBackButton = false;
  pageDetail?: PageTitle | null;

  titleNameList: PageTitle[] = [
    {
      id: 0,
      routeName: "select-profile-type",
      pageTitle: "Profile Type"
    },
    {
      id: 1,
      routeName: "address",
      pageTitle: "package"
    },
    {
      id: 2,
      routeName: "package",
      pageTitle: "package"
    },
    {
      id: 3,
      routeName: "schedule",
      pageTitle: "schedule"
    },
    {
      id: 4,
      routeName: "summary",
      pageTitle: "summary"
    },
    {
      id: 5,
      routeName: "select",
      pageTitle: "select"
    },
    {
      id: 6,
      routeName: "choose",
      pageTitle: "choose"
    },
    {
      id: 7,
      routeName: "package",
      pageTitle: "package"
    },
  ];

  setPageTitle() {
    const currentPath = this.router.url;
    const pathParts = currentPath.split('/').filter(part => part !== '');
    const lastPart = pathParts[pathParts.length - 1];
    const currentPageDetail = this.titleNameList.find(item => item.routeName === lastPart);

    if (currentPageDetail) {
      this.pageDetail = currentPageDetail;
    } else {
      this.pageDetail = null;
    }
  }
  checkForBackButton() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('/user/') && !currentUrl.includes('select-profile-type')) {
      this.showBackButton = true;
    } else {
      this.showBackButton = false;
    }
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/user']);
    }
  }

  navigateToProfilePage() {
    this.routerService.navigateRelative(["user", 'profile']);
  }
}
