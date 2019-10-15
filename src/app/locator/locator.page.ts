import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Form, FormControl} from '@angular/forms';
import { PlacesService } from './../home/places.service';
import { fromEvent, of, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { AutoComplateService} from './auto-complate.service'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
	selector: 'app-locator',
	templateUrl: './locator.page.html',
	styleUrls: ['./locator.page.scss'],
})
export class LocatorPage implements OnInit {
	homeLoc: string = '';

	homeLocationName:any[] = [];

	workLocationName:any[] = [];

	Predictions:any[] = [];

	workLocationauto:any ;
	homeLocationauto:any;

	searchString: string = '';

	locationDataMaster:any[] = [];

	constructor(
		private router: Router,
		private placesservice: PlacesService,
		private autocomplateService: AutoComplateService
		) { }

	ngOnInit() {
		
	}
	autocomplate(event:string, prediction:any[]){

		this.autocomplateService.autoComplate(event['target'].value).pipe(
			map( x => x['predictions'])
			)
			.subscribe( abc => {
				prediction= abc;
				console.log(prediction);
		})
	}

	getlatlngPlaceId(placeId:string, pridiction:string, detailsFor:string ){

		this.workLocationauto = pridiction;

		this.autocomplateService.latlngbyPlaceId(placeId).pipe(
			map( x => x['results'][0].geometry.location)
			).subscribe( abc =>{
			this.locationDataMaster= [{[detailsFor] :{"pridiction": pridiction, "latLng": abc}}];
			console.log(this.locationDataMaster)
		});
		this.Predictions = [];
	}
}
