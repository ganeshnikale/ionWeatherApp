import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UtcConverterPipe } from './../../pipes/utc-converter.pipe';
import { IonicModule } from '@ionic/angular';

import { WeatherPage } from './weather.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeatherPage,UtcConverterPipe]
})
export class WeatherPageModule {}
