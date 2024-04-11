import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  baseUrl = "https://my-bob-tours-json-default-rtdb.firebaseio.com/";

  constructor(
    private httpClient: HttpClient,
    private loadingController: LoadingController
  ) { }

  public regions: any;
  public tourtypes: any;
  public tours: any;

  async initialize() {
    const loading = await this.loadingController.create ({message: 'Loading the data...', spinner: 'crescent'});

    await loading.present();

    await this.getRegions().then(data => this.regions = data);

    await this.getTourtypes().then(data => this.tourtypes = _.sortBy(data, 'Name'));

    await this.getTours().then(data => this.tours = _.sortBy(data, 'Title'));

    await loading.dismiss();
  }

  getRegions() {
    let regionsUrl = this.baseUrl + "Regions.json";
    return this.httpClient.get(regionsUrl).toPromise();
  }

  getTourtypes() {
    let tourtypesUrl = this.baseUrl + "Tourtypes.json";
    return this.httpClient.get(tourtypesUrl).toPromise();
  }

  getTours() {
    let toursUrl = this.baseUrl + "Tours.json";
    return this.httpClient.get(toursUrl).toPromise();
  }

}
