import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2';

import { MyValidators } from '../../validators/validators';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuiler: FormBuilder,
    public fireAuth: AngularFireAuth
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
    this.fireAuth.createUser({
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwordGroup.confirmPassword
    })
    .catch(error =>{
      console.log(error);
    });
  }

}
