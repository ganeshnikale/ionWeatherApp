import { PlacesService } from './../../places.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './../../../auth/auth.service';

@Component({
  selector: 'app-place-detils',
  templateUrl: './place-detils.page.html',
  styleUrls: ['./place-detils.page.scss'],
})
export class PlaceDetilsPage implements OnInit {
  placesDetails:any = [];
  apiKey:string  ='AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
  constructor(
        private activerouter: ActivatedRoute,
        private http: HttpClient,
        private placesservice: PlacesService,
        private afdb: AngularFireDatabase,
        private AuthService: AuthService
     ) { }
  ngOnInit() {
    this.activerouter.queryParamMap.subscribe( abc => {
      this.placesservice.getPlaceDetails(abc.get('place_id')).subscribe( data =>{
        this.placesDetails = [data['result']];
      })
    })
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
 addToFavorite(favoritePlace){ 
  this.placesservice.setfavoritePlace(favoritePlace);
   
 }

}