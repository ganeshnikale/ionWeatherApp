import { map } from 'rxjs/operators';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../WeatherService';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  
  workplacesMasterData: any[] = [];
  homeplacesMasterData: any[] = [];

  homeLat = this.placesservice.homeLocationData[0].homepre.lat;
	homeLng = this.placesservice.homeLocationData[0].homepre.lng;

	 workLat = this.placesservice.workLocationData[0].workpre.lat;
	 workLng = this.placesservice.workLocationData[0].workpre.lng;

  currentView: string = 'home';

  constructor(private weatherservice: WeatherService, private placesservice: PlacesService) { }

  ngOnInit() {

    
    this.getPlacesweatherData(this.workLat, this.workLng, this.workplacesMasterData);
    this.getPlacesweatherData(this.homeLat, this.homeLng, this.homeplacesMasterData);
    
  }
  getPlacesweatherData(lat, lng, storeData) {
    this.weatherservice.getWeatherData(lat, lng).pipe(
      map( x => x)
    ).subscribe( abc => {
      storeData.push(abc)
    })
  }

  segmentChanged($event) {
    this.currentView = $event.detail.value;
  }
}
