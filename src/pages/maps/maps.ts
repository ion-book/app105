import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation
  ) {}

  ionViewDidLoad() {
    this.getPosition();
  }

  getPosition(){
    this.geolocation.getCurrentPosition()
    .then( response =>{
      this.createMap(response.coords.latitude, response.coords.longitude);
    })
    .catch( error =>{
      console.log(error);
    });
  }

  private createMap(lat, lng){
    let mapEle = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: {lat: lat, lng: lng},
      zoom: 12
    });

    let marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        title:"Hello World!",
        map: this.map
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
  }

}
