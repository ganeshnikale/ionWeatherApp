import { Observable } from 'rxjs';
import { WeatherService } from './WeatherService';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


 
@Injectable({
	providedIn: 'root'
})
export class PlacesService {
	
	homeLocationData:any[] = [];
	workLocationData:any[] = [];

	favoritePlace:Observable<any[]>;

	private apiKey:string = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
	
	constructor(private http: HttpClient, private weatherservice: WeatherService) { }

	getLatLongs(location:string) {
		let params = new HttpParams()
		.set("address",location)
		.set("key",this.apiKey);
		return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?`,{params})
	}

	getPlaces1(lat:string, lng:string, lookingfor:string) {
		
		let params = new HttpParams()
		.set("type", lookingfor)
		.set("radius","1500")
		.set("key", this.apiKey);
		return this.http.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}`,{params})	
	}

	getPlaceDetails(place_id:string) {
		let params = new HttpParams()
		.set("place_id", place_id)
		.append("fields","name,opening_hours,photos,rating,formatted_phone_number,formatted_address,website,reference")
		.set("key", this.apiKey);
		return this.http.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?`,{params})
	}

}
