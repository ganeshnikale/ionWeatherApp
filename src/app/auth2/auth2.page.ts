import { auth } from 'firebase';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {AngularFireAuth } from 'angularfire2/auth';

import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.page.html',
  styleUrls: ['./auth2.page.scss'],
})
export class Auth2Page implements OnInit {
  newOfferForm: FormGroup;
  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.loginCredintials();
    // this.afAuth.auth.createUserWithEmailAndPassword('ganeshnikale@gmail.com', '1234ganesh').then( data =>{
    //   console.log(data)
    // });
    
  }
  loginCredintials(){
    console.log('aaa');
    this.newOfferForm = new FormGroup({
      userName : new FormControl(null,{
        updateOn:'blur',
        validators: [Validators.required,Validators.minLength(4)]
      }),
      Passwords : new FormControl(null,{
        updateOn: 'blur',
       validators: [Validators.required,Validators.minLength(4)]
      }),
      
    });
    console.log(this.newOfferForm);
    console.log(this.newOfferForm.value.userName);
  }
  login(){
    console.log(this.newOfferForm);
    console.log(this.newOfferForm.value.userName);
    console.log(this.newOfferForm.value.Passwords);
    this.afAuth.auth.signInWithEmailAndPassword(this.newOfferForm.value.userName,this.newOfferForm.value.Passwords).then( data =>{
      console.log(data)
    }).catch( error =>{
      console.log(error);
    });
  // this.afAuth.auth.createUserWithEmailAndPassword('ganeshnikale@gmail.com','ganesh@123');
  }

}
