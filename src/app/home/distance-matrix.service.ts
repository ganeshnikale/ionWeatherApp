
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceMatrixService {

  url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?';

  constructor(private HttpClient: HttpClient) { }
  
  getDistance(home, work) {
    let params = new HttpParams()
 
    .set('units', 'imperial')
    .set('origins', home)
    .set('destinations', work)
    .set('key', 'one%20Bkc')
    .set('departure_time', 'now')
    .set('key', 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8');
   

   return this.HttpClient.get(this.url,{params})
  }

}
