import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, LoadingController } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersService: UsersService,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public loadCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create();
    load.present();
    this.usersService.getAll()
    .then((data: any) =>{
      this.users = data.results;
      load.dismiss();
    })
    .catch(error =>{
      load.dismiss();
      console.error(error);
    });
  }

  sendSms(){
    let alert = this.alertCtrl.create({
      title: 'Cuidado',
      subTitle: 'El mensaje se descontara de tu plan de datos',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  call(){
    let alert = this.alertCtrl.create({
      title: '¿Estas seguro?',
      subTitle: 'Esta persona no es buena, estas seguro que quieras llamarla',
      buttons: [
        {
          text: 'No llamar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
        text: 'Si llamar',
        handler: () => {
          console.log('yes clicked');
        }
      }
      ]
    });
    alert.present();
  }

  /*
  share(){
    let alert = this.alertCtrl.create({
      title: '¿Estas seguro?',
      subTitle: 'Escribe tu mensaje',
      inputs: [
        {
          name: 'message',
          placeholder: 'Escribe tu mensaje',
          type:"text"
        },
        {
          name: 'more',
          placeholder: 'Escribe tu mensaje'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
        text: 'Compartir',
        handler: (data) => {
          console.log(data.message);
          console.log(data.more);
          console.log('yes clicked');
        }
      }
      ]
    });
    alert.present();
  }
  */

  share(){
    let action = this.actionSheetCtrl.create({
      title: 'Mis opciones',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          handler: ()=>{
            console.log('click share');
          }
        },
        {
          text: 'Compartir',
          handler: ()=>{
            console.log('click share');
          }
        },
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: ()=>{
            console.log('click borrar');
          }
        },
        {
         text: 'Cancel',
         role: 'cancel',
         icon: 'close',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
      ]
    });
    action.present();
  }

}