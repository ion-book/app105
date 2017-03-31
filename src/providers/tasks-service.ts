import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {

  path: string = 'http://jsonplaceholder.typicode.com/todos';

  constructor(public http: Http) {
    console.log('Hello TasksService Provider');
  }

  getAll( userId: string ){
    return new Promise((resolve, reject)=>{
      this.http.get(`${this.path}?userId=${userId}`)
      .map(res => res.json())
      .subscribe(data=>{
        resolve(data);
      }, error=> {
        reject(error);
      })
    });
  }

  create(task: any){
    return new Promise((resolve, reject)=>{
      this.http.post(`${this.path}`, task)
      .map(res => res.json())
      .subscribe(data=>{
        resolve(data);
      }, error=> {
        reject(error);
      })
    });
  }

  update(task: any){
    return new Promise((resolve, reject)=>{
      this.http.put(`${this.path}/${task.id}`, task)
      .map(res => res.json())
      .subscribe(data=>{
        resolve(data);
      }, error=> {
        reject(error);
      })
    });
  }

}
