import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular boilerplate';

  constructor(private sidebarService: NbSidebarService) {}

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/',
    },
    {
      title: 'Articles',
      icon: 'grid-outline',
      link: 'articles',
    },
  ];

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
