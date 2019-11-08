import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Auth2Service} from './auth2.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthResponce} from './authResponce';


@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.page.html',
  styleUrls: ['./auth2.page.scss'],
})
export class Auth2Page implements OnInit {
  newOfferForm: FormGroup;
  logObt:Observable<AuthResponce>;
  isLogin: boolean = true;
  localId:string = '';

  constructor( private authservice:Auth2Service ,private alertCtrl: AlertController, private router : Router) { }

  ngOnInit() {
    this.loginCredintials();
  }
  loginCredintials(){
    console.log('aaa');
    this.newOfferForm = new FormGroup({
      userName : new FormControl(null,{
        updateOn:'blur',
        validators: [Validators.required,Validators.minLength(4), Validators.email]
      }),
      Passwords : new FormControl(null,{
        updateOn: 'blur',
       validators: [Validators.required,Validators.minLength(4)]
      }),
      
    });
  }
  login(){

    if(this.isLogin === true){
      this.logObt = this.authservice.signIn(this.newOfferForm.value.userName,this.newOfferForm.value.Passwords);
    } else {
      this.logObt = this.logObt = this.authservice.signUp(this.newOfferForm.value.userName,this.newOfferForm.value.Passwords);
    }

  this.logObt.subscribe( data => {
    console.log(data);
    this.localId =  data.localId;
    if( this.localId != ''){
      this.router.navigateByUrl('/index');
    } else {
    }
  },errorRes => {
    if(errorRes.error.error.message === "INVALID_EMAIL"){
      this.showAlert("Please Enter Valid Email id");
    } else if (errorRes.error.error.message === "EMAIL_NOT_FOUND") {
      this.showAlert("Entered Email-id Not found");
    } else if(errorRes.error.error.message === "INVALID_PASSWORD" ){
      this.showAlert("please Enter Valid password");
    }
  });
    this.newOfferForm.reset();
  
  }

  onLogout(){
    
  }
  changeMethod(){
    this.isLogin = !this.isLogin;
  }
  showAlert(message:string){
    this.alertCtrl.create({header:'authentication Faild', message:message, buttons:['okay']}).then(alertEl=> alertEl.present());
  }
}
