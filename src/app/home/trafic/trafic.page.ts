import { DistanceMatrixService } from './../distance-matrix.service';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from './../places.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trafic',
  templateUrl: './trafic.page.html',
  styleUrls: ['./trafic.page.scss'],
})
export class TraficPage implements OnInit {
  workLocation: string = '';
  homeLocation: string = '';
  traficMasterData:any[] =[];

  homeLocationText:string = this.placesservice.homeLocationData[0].location;
  workLocationText:string = this.placesservice.workLocationData[0].location;

  homeLat:string = this.placesservice.homeLocationData[0].homepre.lat;
	homeLng:string = this.placesservice.homeLocationData[0].homepre.lng;

	 workLat:string = this.placesservice.workLocationData[0].workpre.lat;
   workLng:string = this.placesservice.workLocationData[0].workpre.lng;
   
   worklatLng:string = this.homeLat.toString().concat(","+this.homeLng.toString());

   homeLatLng:string = this.workLat.toString().concat(","+this.workLng.toString());

   

  constructor(private distancematrixService: DistanceMatrixService, private placesservice:PlacesService) { }

  ngOnInit() {





    this.distancematrixService.getDistance(this.worklatLng, this.homeLatLng).subscribe( abc => {
      this.traficMasterData.push(abc);
    })
     
  }

}
