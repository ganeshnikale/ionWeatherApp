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
  
  constructor(private afAuth: AngularFireAuth, private router : Router) { }
  isLogged:boolean = false;
  uid = this.afAuth.authState.pipe(
    map( authState => {
      if( !authState ){
        return null;
      } else {
        this.isLogged = true;
        return  authState.uid
      }
    })
  );

  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then( 
      abc => {
        if(this.isLogged){
          this.router.navigateByUrl('/index');
        }
      }
    );
    
  }
  logOut(){
    this.afAuth.auth.signOut();
  }
}
