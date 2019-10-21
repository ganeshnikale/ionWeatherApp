
import { async } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {Form, FormControl} from '@angular/forms';
import { PlacesService } from './../home/places.service';
import { Prediction} from './../locator/Ilocation'
import { empty, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { AutoComplateService} from './auto-complate.service'
import { LoadingController } from '@ionic/angular';


@Component({
	selector: 'app-locator',
	templateUrl: './locator.page.html',
	styleUrls: ['./locator.page.scss'],
})
export class LocatorPage implements OnInit {

	workLocationauto:string = '';
	homeLocationauto:string = '';

	werkPridiction:Observable<any[]>;
	homePridiction:Observable<any[]>;

	locationData:any[] = [];

	constructor(
		private router: Router,
		public placesservice: PlacesService,
		private autocomplateService: AutoComplateService,
		private LocadingCtrl: LoadingController
		) { }

	ngOnInit() { }

	autocomplatePridiction(event:string, setTO:string){
	
			this.autocomplateService.autoComplate(event['target'].value)
			if( setTO == 'work'){
				this.werkPridiction = this.autocomplateService.autoComplate(event['target'].value)
				.pipe( map ( x => x['predictions']));
			} else {
				this.homePridiction = this.autocomplateService.autoComplate(event['target'].value)
				.pipe( map ( x => x['predictions']));
			} 
		
		
	}

	setLocation(pridiction:string,placeId:string, text:string,setName:string){
		
		if( setName == 'work'){
			this.workLocationauto = pridiction;
			this.autocomplateService.latlngbyPlaceId(placeId).pipe(
				map (x => 
				[{ [text]: [x['results'][0].geometry][0].location, location : pridiction}]
			))
			.subscribe( abc =>{
				this.placesservice.workLocationData = abc;
			});
		} else {
			this.homeLocationauto = pridiction;
			this.autocomplateService.latlngbyPlaceId(placeId).pipe(
				map (x => 
				[{ [text]: [x['results'][0].geometry][0].location, location : pridiction}]
			))
			.subscribe( abc =>{
			this.placesservice.homeLocationData = abc;
			});
		}
		
		this.werkPridiction = empty();
		this.homePridiction = empty();
		
	}

	navigateHome(){
		this.router.navigateByUrl('/home/tabs/places')
	}
}
