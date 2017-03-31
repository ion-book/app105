import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AlbumsService {

  path: string = 'http://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello AlbumsService Provider');
  }

  getAll(){
    return this.http.get(`${this.path}/albums?_expand=user`)
    .map(response => response.json())
    .toPromise();
  }

  getPhotos(albumId: string){
    return this.http.get(`${this.path}/photos?albumId=${albumId}`)
    .map(response => response.json())
    .toPromise();
  }

}