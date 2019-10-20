import {AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';
import { of as ObservableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth} from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName:string = '';
  userId:string = '';
  constructor(private afAuth: AngularFireAuth, private router : Router) { }
  isLogged:boolean = false;
  uid = this.afAuth.authState.pipe(
    map( authState => {
      if( !authState ){
        return null;
      } else {
        this.isLogged = true;
        this.navigate();
        this.userId = authState.uid;
        return  authState.uid
      }
    })
  );
  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      abc => {
         this.userName = abc.user.displayName; 
         this.navigate();
         console.log(this.userName)
        } 
    )
  }

  logOut(){
    this.afAuth.auth.signOut().then(
      abc => { this.router.navigateByUrl('/auth')}
    )
  }

  navigate() {
    this.router.navigateByUrl('/index');
  }
}
