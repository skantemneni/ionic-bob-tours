import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './pages/details/details.page';
 


const routes: Routes = [
  {
    path: '',
    redirectTo: 'favorites',
    pathMatch: 'full'
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'regions',
    loadChildren: () => import('./pages/regions/regions.module').then( m => m.RegionsPageModule)
  },
  {
    path: 'tour-types',
    loadChildren: () => import('./pages/tour-types/tour-types.module').then( m => m.TourTypesPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./pages/request/request.module').then( m => m.RequestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
