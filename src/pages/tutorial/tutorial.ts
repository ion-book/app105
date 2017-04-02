import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public splashScreen: SplashScreen
  ) {}

  ionViewDidLoad() {
    this.splashScreen.hide();
    this.menuCtrl.enable(false, 'menu');
  }

  goToLoginPage(){
    this.navCtrl.push( LoginPage );
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

}