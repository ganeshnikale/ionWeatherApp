import { PlacesService } from './../../places.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

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
        private placesservice: PlacesService
     ) { }
  ngOnInit() {
    this.activerouter.queryParamMap.subscribe( abc => {
      console.log(abc.get('place_id'));

      this.placesservice.getPlaceDetails(abc.get('place_id')).subscribe( data =>{
        this.placesDetails.push(data['result']);
        console.log(this.placesDetails);
      })
    })
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
 addToFavorite(favoritePlaceId){
  
  this.placesservice.setfavoritePlace(favoritePlaceId);
   
 }

}
