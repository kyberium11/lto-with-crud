import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPlatenumberPage } from './view-platenumber.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPlatenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPlatenumberPageRoutingModule {}
