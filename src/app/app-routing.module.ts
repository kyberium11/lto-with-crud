import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'save-platenumber',
    loadChildren: () => import('./save-platenumber/save-platenumber.module').then( m => m.SavePlatenumberPageModule)
  },
  {
    path: 'list-platenumber',
    loadChildren: () => import('./list-platenumber/list-platenumber.module').then( m => m.ListPlatenumberPageModule)
  },
  {
    path: 'view-platenumber/:key',
    loadChildren: () => import('./view-platenumber/view-platenumber.module').then( m => m.ViewPlatenumberPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
