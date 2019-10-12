

import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../../WeatherService'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  weatherDetails:any = [];
  constructor(private weatherservice: WeatherService, private httpactive: ActivatedRoute ) { }


  ngOnInit() {



  }



}
