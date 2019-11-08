import { from, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth'
import { auth } from 'firebase';
import { User} from './user.model';
import { map, tap } from 'rxjs/operators';
import { AuthResponce} from './authResponce';
import {Plugins} from '@capacitor/core'

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  private _user = new BehaviorSubject<User>(null);
  isLogin:boolean;

  get userAuthenticate(){
    return this._user.asObservable().pipe( map ( user => 
      {
        if (user){
          console.log(!!user.token);
         return !!user.token
      } else {
        
        return false;
      }
      }
      ));
  }

  get userId(){
    return this._user.asObservable().pipe( map( user => {
      if(user){
        console.log(user.id)
        return user.id
      } else {
        return null;
      }
    }));
  }

  constructor(private afAuth:AngularFireAuth, private http: HttpClient) { }
  
  signIn(email:string, password:string){
   return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,{
    email: email,password:password,returnSecureToken:true 
   }).pipe( tap ( this.setUserData.bind(this)))
  }

  signUp(email:string, password:string){
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`,{
     email: email,password:password,returnSecureToken:true 
    }).pipe( tap ( this.setUserData.bind(this)))
   }


   private setUserData(userData: AuthResponce){
      const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000)); 
      this._user.next( new User(
        userData.localId,
        userData.email,
        userData.idToken, 
        expirationTime
        ));
        this.storeAuthData(userData.localId,userData.email, expirationTime.toISOString())
   }

   private storeAuthData(
     userId:string, 
     token:string, 
     tokenExprirationDate:string){
      const data = JSON.stringify({ userId: userId, token:token, tokenExprirationDate:tokenExprirationDate});
      Plugins.Storage.set({key:'authData',value:data});
   }

}
