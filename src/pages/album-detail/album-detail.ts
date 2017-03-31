import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

import { AlbumsService } from '../../providers/albums-service';

@Component({
  selector: 'page-album-detail',
  templateUrl: 'album-detail.html'
})
export class AlbumDetailPage {

  albumId: string;
  photos: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public albumsService: AlbumsService,
    public loadCtrl: LoadingController
  ) {
    this.albumId = this.navParams.get('albumId');
  }

  ionViewDidLoad() {
    let load = this.loadCtrl.create();
    load.present();
    this.albumsService.getPhotos(this.albumId)
    .then(photos =>{
      this.photos = photos;
      load.dismiss();
    });
  }

  openGallery(photo){
    let modal = this.modalCtrl.create( GalleryPage, {
      photo: photo
    });
    modal.present();
    modal.onDidDismiss(data =>{
      console.log(data);
    })
  }

}
