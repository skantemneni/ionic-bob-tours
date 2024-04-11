import { Component, OnInit } from '@angular/core';
import { BobToursService } from 'src/app/services/bob-tours.service';

@Component({
  selector: 'app-tour-types',
  templateUrl: './tour-types.page.html',
  styleUrls: ['./tour-types.page.scss'],
})
export class TourTypesPage implements OnInit {

  constructor(public btService: BobToursService) { }

  tourtypes: any;

  ngOnInit() {
    this.tourtypes = this.btService.tourtypes;
  }

}
