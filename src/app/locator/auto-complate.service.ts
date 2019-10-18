import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoComplateService {

  constructor(private http: HttpClient) { }

  private apiKey:string = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
  
  autoComplate(area:string){ 
    let params = new HttpParams()
    .set("input", area)
    .set("key", this.apiKey);
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?`,{params})
  }

  latlngbyPlaceId(placeId:string){
    let params = new HttpParams()
    .set("place_id",placeId)
    .set("key", this.apiKey)
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?`, {params});
  }
}