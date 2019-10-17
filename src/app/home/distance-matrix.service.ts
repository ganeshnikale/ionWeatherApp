
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceMatrixService {

  url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=19.2403305,73.1305395|19.2183307,72.9780897&departure_time=now&key=AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';

  constructor(private HttpClient: HttpClient) { }
  
  getDistance(homeLatLng:string,worklatLng:string) {

    let params = new HttpParams()
 
    .set('units', 'imperial')
    .set('origins', homeLatLng)
    .set('destinations',worklatLng )
    .set('departure_time', 'now')
    .set('key', 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8');
    console.log(params.toString());
    return this.HttpClient.get(this.url,{params});

   
  }

}
