import {AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';
import { of as ObservableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth} from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth) { }

  uid = this.afAuth.authState.pipe(
    map( authState => {
      if( !authState ){
        return null;
      } else {
        return  authState.uid
      }
    })
  );
  isAdmin = ObservableOf(true);

  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());


  }
  logOut(){
    this.afAuth.auth.signOut();
  }
}
