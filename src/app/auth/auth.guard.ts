import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';

import { Observable, pipe } from 'rxjs';

import { AuthService } from './auth.service';
import { Auth2Service } from '../auth2/auth2.service';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad  {
  constructor(private authService : AuthService,private auth2service:Auth2Service, private router : Router){

  }
  canLoad(
    
    route: Route,
    segments: UrlSegment[]):
    Observable<boolean> | Promise<boolean> | boolean {
   
    
    return this.auth2service.userAuthenticate.pipe( take(1), tap( isAuthenticate =>{
      if (!isAuthenticate) {  
        this.router.navigateByUrl('/auth2');
      }
    }))
  }
}
