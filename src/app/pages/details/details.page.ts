import { Component, OnInit } from '@angular/core';
import { BobToursService } from 'src/app/services/bob-tours.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(
    public btService: BobToursService,
    private activatedRoute: ActivatedRoute
  ) { }

  tour:any = null;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tour = _.find(this.btService.tours, ['ID', parseInt(id || '6')]);
  }

}
