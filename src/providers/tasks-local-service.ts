import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TasksLocalService {

  key: string = 'tasks';

  constructor(
    public storage: Storage
  ) {
    console.log('Hello TaskLocalService Provider');
  }

  saveTasks(tasks: any[]){
    return this.storage.set(this.key, JSON.stringify(tasks));
  }

  getAll(){
    return this.storage.get(this.key);
  }

}
