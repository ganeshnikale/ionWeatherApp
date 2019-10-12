import { PlacesService } from './places.service';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    WeatherDataMaster:any = [];
    WeatherDetails:any = [];
    homeLat:string = '';
    homeLng: string = '';
    enterLocation:string = '';
    constructor(private http: HttpClient){ }
    
    getWeatherData(lat:string, lng:string) {
        console.log(lat, lng);
         return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/48581c0b6ca5124a40312a1e2426a08c/${lat},${lng}?units=si`);
    }
}