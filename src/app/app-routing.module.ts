import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canLoad: [AuthGuard]
  },
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthPageModule',
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
];

@NgModule({
  imports: [
    HomePageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
