import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../WeatherService';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any = [];
  workplacesMasterData: any[] = [];
  homeplacesMasterData: any[] = [];
  enterLocation: string;

  workLocationLatLng: any;
  homeLocationLatLng: any;

  workLocation: string = '';
  homeLocation: string = '';

  currentView: string = 'home';

  constructor(private weatherservice: WeatherService, private placesservice: PlacesService) { }

  ngOnInit() {

    this.workLocation = this.placesservice.workLocation;
    this.homeLocation = this.placesservice.homeLocation;

    // this.workLocation = "thane";
    // this.homeLocation = "kurla";

    this.getPlacesweatherData(this.workLocation, this.workLocationLatLng, this.workplacesMasterData);
    this.getPlacesweatherData(this.homeLocation, this.homeLocationLatLng, this.homeplacesMasterData);
  }
  getPlacesweatherData(worklocation, latlan, storeData) {

    this.placesservice.getLatLongs(worklocation)
      .subscribe(abc => {
        latlan = abc['results'][0].geometry.location;
        let data = this.weatherservice.getWeatherData(latlan.lat, latlan.lng)
        data.subscribe(abc => {
          storeData.push(abc);
        })
      });
  }

  segmentChanged($event) {
    this.currentView = $event.detail.value;
  }
}
