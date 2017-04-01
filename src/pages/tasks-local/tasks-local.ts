import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksLocalService } from '../../providers/tasks-local-service';

@Component({
  selector: 'page-tasks-local',
  templateUrl: 'tasks-local.html'
})
export class TasksLocalPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksLocalService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksService.getAll()
    .then((tasks: any) =>{
      console.log('data', tasks);
      if(tasks){
        this.tasks = JSON.parse(tasks);
      }
    })
    .catch(error =>{
      console.error(error);
    });
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
            };
            this.tasks.unshift( newTask );
            this.tasksService.saveTasks( this.tasks )
            .then(resultTask =>{
              console.log( resultTask );
            })
            .catch(error =>{
              console.error( error );
            });
          }
        }
      ]
    });
    prompt.present();
  }

  onChange( task: any){
    task.completed = !task.completed;
    this.tasksService.saveTasks( this.tasks );
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
            this.tasksService.saveTasks( this.tasks );
          }
        }
      ]
    });
    prompt.present();
  }

  deleteTask(task, index){
    this.tasks.splice(index, 1);
    this.tasksService.saveTasks( this.tasks );
  }

}

