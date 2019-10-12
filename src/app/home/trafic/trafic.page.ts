import { DistanceMatrixService } from './../distance-matrix.service';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-trafic',
  templateUrl: './trafic.page.html',
  styleUrls: ['./trafic.page.scss'],
})
export class TraficPage implements OnInit {
  workLocation: string = '';
  homeLocation: string = '';
  traficMasterData:any[] =[];
  constructor(private distancematrixService: DistanceMatrixService, private placesservice:PlacesService) { }

  ngOnInit() {

    this.workLocation = this.placesservice.workLocation;
    this.homeLocation = this.placesservice.homeLocation;





    console.log(this.distancematrixService.getDistance(this.homeLocation, this.workLocation).subscribe(
      abc => {
        this.traficMasterData.push(abc);
        console.log(this.traficMasterData);

        for(let ab of this.traficMasterData){
          console.log(ab.rows[0].elements[0].distance.text);
          for(let x of this.traficMasterData){
            console.log(x);
          }
        }
      }
    ));
  }

}
