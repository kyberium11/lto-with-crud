import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPlatenumberPageRoutingModule } from './list-platenumber-routing.module';

import { ListPlatenumberPage } from './list-platenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPlatenumberPageRoutingModule
  ],
  declarations: [ListPlatenumberPage]
})
export class ListPlatenumberPageModule {}
