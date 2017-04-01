import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }
    this.camera.getPicture(options)
    .then(imageData =>{
      this.image = 'data:image/jpeg;base64,' + imageData;
    })
    .catch(error =>{
      console.log(error);
    });

  }

}
