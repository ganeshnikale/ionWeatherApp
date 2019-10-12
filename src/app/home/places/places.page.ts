import { Component, OnInit, Pipe } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActionSheetController } from '@ionic/angular';
import { map, filter } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';



@Component({
	selector: 'app-places',
	templateUrl: './places.page.html',
	styleUrls: ['./places.page.scss'],
})


export class PlacesPage implements OnInit {
	workplacesMasterData: any[] = [];
	homeplacesMasterData: any[] = [];
	placePhotos: any = [];
	showData: boolean = false;
	homeLat: any = '';
	homeLng: any = '';

	workLocation: string = '';
	homeLocation: string = ''

	homeLocationLatLng = this.placesservice.homeLocationNameLatLng;
	workLocationLatLng = this.placesservice.workLocationNameLatLng;

	currentView: string = 'home';

	apiKey: string = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';

	lookingFor: string = 'restaurant';
	constructor(
				private placesservice: PlacesService, 
				public actionSheetController: ActionSheetController,
				public loadingCtrl: LoadingController) { }

	ngOnInit() {
		this.workLocation = this.placesservice.workLocation;
		this.homeLocation = this.placesservice.homeLocation;

		
	}

	getDataByType() {
		
		this.workplacesMasterData = [];
		this.homeplacesMasterData = [];
		this.getWorkPlacesData(this.workLocation, this.workLocationLatLng, this.workplacesMasterData, this.lookingFor);
		this.getWorkPlacesData(this.homeLocation, this.homeLocationLatLng, this.homeplacesMasterData, this.lookingFor);
	}

	
	
	getWorkPlacesData(worklocation, latlan, storeData, lookingfor) {

		this.loadingCtrl.create({
			message:'please wait',
			keyboardClose: true,
		}).then( lodingEl =>{
			lodingEl.present();
			this.placesservice.getLatLongs(worklocation)
			.subscribe(abc => {
				latlan = abc['results'][0].geometry.location; this.workLocation = this.placesservice.workLocation;
				this.homeLocation = this.placesservice.homeLocation; this.workLocation = this.placesservice.workLocation;
				this.homeLocation = this.placesservice.homeLocation;
				let data = this.placesservice.getPlaces1(latlan.lat, latlan.lng, lookingfor)
				data.pipe(
					map(x => {
						return x['results'].filter(val => { return val.photos !== undefined });
					}),
				).subscribe(abc => {
					storeData.push(abc);
				})
			});
			lodingEl.dismiss();
		})
		
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
