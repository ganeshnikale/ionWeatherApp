import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule} from './home-routing.module'

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { from } from 'rxjs';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
