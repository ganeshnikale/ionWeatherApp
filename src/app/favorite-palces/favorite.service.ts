import { filter, map, reduce } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoritePlace:Observable<any[]>;

  constructor( private afdb: AngularFireDatabase, private AuthService: AuthService) {

    this.favoritePlace = this.afdb.list(`favoritePlace/${this.AuthService.userId}`).valueChanges();
   }  
}
