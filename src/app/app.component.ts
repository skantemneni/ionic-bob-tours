import { Component } from '@angular/core';
import { BobToursService } from './services/bob-tours.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Favorites', url: '/favorites', icon: 'star' },
    { title: 'Regions', url: '/regions', icon: 'images' },
    { title: 'Tour-Types', url: '/tour-types', icon: 'bus' },
  ];

  constructor(public btService: BobToursService) {
    this.btService.initialize();
  }
}
