import { map, reduce } from 'rxjs/operators';
import { PlacesService } from './../home/places.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteService} from './favorite.service';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-favorite-palces',
  templateUrl: './favorite-palces.page.html',
  styleUrls: ['./favorite-palces.page.scss'],
})
export class FavoritePalcesPage implements OnInit {

  Fplaces:Observable<any[]>;
  constructor(public favoriteService:FavoriteService) { }

  ngOnInit() {
    this.Fplaces = this.favoriteService.favoritePlace.pipe(reduce((unique,item) => unique.includes(item)?unique: [...unique,item, []] ))
  }

}
