import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';


@Injectable()
export class TasksFirebaseService {

  tasks: FirebaseListObservable<any>;

  constructor(
    public fireDatabase: AngularFireDatabase
  ) {
    this.tasks = this.fireDatabase.list('/tasks');
  }

  getAll(){
    return this.tasks;
  }

  create(task: any){
    return this.tasks.push( task );
  }

  update(task: any){
    return this.tasks.update(task.$key, {
      title: task.title,
      completed: task.completed
    });
  }

  delete(task: any){
    return this.tasks.remove( task.$key );
  }

}
