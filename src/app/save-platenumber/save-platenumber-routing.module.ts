import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavePlatenumberPage } from './save-platenumber.page';

const routes: Routes = [
  {
    path: '',
    component: SavePlatenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavePlatenumberPageRoutingModule {}
