import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MyValidators } from '../../validators/validators';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuiler: FormBuilder
  ) {
    this.registerForm = this.formBuiler.group({
      'email': ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
      'age': ['', [Validators.required, MyValidators.isOld]],
      'passwordGroup': this.formBuiler.group({
        'password': ['',[Validators.required, Validators.minLength(6)]],
        'confirmPassword': ['', [Validators.required, Validators.minLength(6)]],
      }, {
        validator: MyValidators.passwordMatcher
      }),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  saveData( event: Event ){
    event.preventDefault();
    console.log(this.registerForm.value);
    this.goToHomePage();
  }

  goToHomePage(){
    this.navCtrl.setRoot( HomePage );
  }

}
