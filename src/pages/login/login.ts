import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuiler: FormBuilder,
    public fireAuth: AngularFireAuth
  ) {
    this.loginForm = this.formBuiler.group({
      'email': ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  saveData( event: Event ){
    event.preventDefault();
    this.fireAuth.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
    .catch(error =>{
      console.log(error);
    });
  }

}