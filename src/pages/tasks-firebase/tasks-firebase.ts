import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksFirebaseService } from '../../providers/tasks-firebase-service';

import { FirebaseListObservable  } from 'angularfire2';

@Component({
  selector: 'page-tasks-firebase',
  templateUrl: 'tasks-firebase.html'
})
export class TasksFirebasePage {

  tasks: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksFirebaseService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasks = this.tasksService.getAll();
  }

  createTask(){
    let prompt = this.alertCtrl.create({
      title: 'Nueva tarea',
      message: "Digite la nueva tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let newTask ={
              title: data.title,
              completed: false
            }
            this.tasksService.create( newTask )
            .catch(error=>{
              console.log(error);
            });
          }
        }
      ]
    });
    prompt.present();
  }

  onChange( task: any){
    task.completed = !task.completed;
    this.tasksService.update( task )
    .catch(error=>{
      console.log(error);
    });
  }

  updateTask( task: any, index: any ){
    let prompt = this.alertCtrl.create({
      title: 'Actualizar tarea',
      message: "Digite la nueva tarea",
      inputs: [
        {
          name: 'title',
          value: task.title,
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            task.title = data.title;
            this.tasksService.update( task )
            .catch(error =>{
              console.error( error );
            });
          }
        }
      ]
    });
    prompt.present();
  }

  deleteTask(task, index){
    this.tasksService.delete(task);
  }

}

