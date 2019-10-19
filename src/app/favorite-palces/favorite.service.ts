import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoritePlace:Observable<any[]>;

  constructor( private afdb: AngularFireDatabase) {

    this.favoritePlace = this.afdb.list('favoritePlace').valueChanges()
   }


  
}
