import { auth } from 'firebase';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.page.html',
  styleUrls: ['./auth2.page.scss'],
})
export class Auth2Page implements OnInit {

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
    
    this.afAuth.auth.createUserWithEmailAndPassword('ganeshnikale@gmail.com', '1234ganesh').then( data =>{
      console.log(data)
    });
    
  }

  signIn(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider()).then(data =>{
      console.log(data);
    })
  }

}
