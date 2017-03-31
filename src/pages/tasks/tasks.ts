import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public tasksService: TasksService
  ) {}

  ionViewDidLoad() {
    this.tasks = this.tasksService.getAll();
  }

}
