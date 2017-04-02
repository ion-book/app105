import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  getAll(){
    return new Promise((resolve, reject)=>{
      this.http.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .subscribe(data=>{
        resolve(data);
      }, error=> {
        reject(error);
      })
    });
  }

}
