import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';


@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksService.getAll('8')
    .then((tasks: any) =>{
      this.tasks = tasks;
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
            }
            this.tasksService.create( newTask )
            .then(resultTask =>{
              this.tasks.unshift( resultTask );
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
    this.tasksService.update( task );
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
            let updatetask = Object.assign({}, task);
            updatetask.title = data.title;
            this.tasksService.update( updatetask )
            .then(resultTask =>{
              this.tasks[index] = resultTask;
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

  deleteTask(task, index){
    this.tasksService.delete(task.id)
    .then(resultTask =>{
      this.tasks.splice(index, 1);
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
