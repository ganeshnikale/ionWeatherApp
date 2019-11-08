import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth2',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canLoad: [AuthGuard]
  },
  
   {
    path: 'index',
    loadChildren: './locator/locator.module#LocatorPageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'favorite-palces', 
    loadChildren: './favorite-palces/favorite-palces.module#FavoritePalcesPageModule',
    canLoad: [AuthGuard]
   },
  { path: 'auth2', loadChildren: './auth2/auth2.module#Auth2PageModule' },
];

@NgModule({
  imports: [
    HomePageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
