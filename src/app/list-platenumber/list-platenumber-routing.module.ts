import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlatenumberPage } from './list-platenumber.page';

const routes: Routes = [
  {
    path: '',
    component: ListPlatenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPlatenumberPageRoutingModule {}
