import { Component, OnInit, Pipe } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActionSheetController } from '@ionic/angular';
import { map, filter } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';




@Component({
	selector: 'app-places',
	templateUrl: './places.page.html',
	styleUrls: ['./places.page.scss'],
})


export class PlacesPage implements OnInit {
	workplacesMasterData: any[] = [];
	homeplacesMasterData: any[] = [];
	// flickrApiKey 44a2ed0a964544b14cd515940fa9b02b
	 homeLat = this.placesservice.homeLocationData[0].homepre.lat;
	 homeLng = this.placesservice.homeLocationData[0].homepre.lng;

	 workLat = this.placesservice.workLocationData[0].workpre.lat;
	 workLng = this.placesservice.workLocationData[0].workpre.lng;

	currentView: string = 'home';


	lookingFor: string = 'restaurant';
	constructor(
				private placesservice: PlacesService, 
				public actionSheetController: ActionSheetController,
				public loadingCtrl: LoadingController) { }

	ngOnInit() {
		this.getDataByType();
	}

	 getDataByType() {
		this.workplacesMasterData = [];
		this.homeplacesMasterData = [];
		this.getplaces(this.homeplacesMasterData, this.homeLat, this.homeLng);
		this.getplaces(this.workplacesMasterData, this.workLat, this.workLng);
	}

	getplaces(setTo, lat, lng){
		 this.placesservice.getPlaces1(lat,lng,this.lookingFor).pipe(
			map( x => x['results'])
		).subscribe ( abc => {
			setTo.push(abc)
		})
	}
	
	async presentLoadingWithOptions() {
		const loading = await this.loadingCtrl.create({
		  spinner: null,
		  duration: 5000,
		  message: 'Please wait...',
		  translucent: true,
		  cssClass: 'custom-class custom-loading'
		});
		return await loading.present();
	}

	segmentChanged($event) {
		this.currentView = $event.detail.value;
	}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'What Are you Looking For',
			buttons: [{
				text: 'Restaurants',
				icon: 'restaurant',
				handler: () => {
					this.lookingFor = 'restaurant';
					this.getDataByType();
				}
			},
			{
				text: 'Bars',
				icon: 'wine',
				handler: () => {
					this.lookingFor = 'bars';
					this.getDataByType();
				}
			},
			{
				text: 'Coffee',
				icon: 'cafe',
				handler: () => {
					this.lookingFor = 'cafe';
					this.getDataByType();
				}
			},
			{
				text: 'Banks',
				icon: 'business',
				handler: () => {
					this.lookingFor = 'bank';
					this.getDataByType();
				}
			},
			{
				text: 'Gas Stations',
				icon: 'logo-model-s',
				handler: () => {
					this.lookingFor = 'gas_station';
					this.getDataByType();
				}
			},
			{
				text: 'Hospitals',
				icon: 'medkit',
				handler: () => {
					this.lookingFor = 'hospital';
					this.getDataByType();
				}
			},
			{
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
	}
}
