import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
        {
            path: 'weather',
            
            children: [
              {
                path: '',
                loadChildren: './weather/weather.module#WeatherPageModule',
              },
              {
                path: ':i',
                loadChildren: './weather/weather-details/weather-details.module#WeatherDetailsPageModule'
              }
            ]
        },
        {
            path: 'places',
            children: [
              {
                path: '',
                loadChildren: './places/places.module#PlacesPageModule'
              },
              {
                path: ':placeId',
                loadChildren: './places/place-detils/place-detils.module#PlaceDetilsPageModule'
              }
            ]
        },
        {
          path: 'trafic',
          children: [ 
            {
              path: '',
              loadChildren: './trafic/trafic.module#TraficPageModule'
            }
          ]
        }

    ]
  },
 
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}