import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPlatenumberPageRoutingModule } from './view-platenumber-routing.module';

import { ViewPlatenumberPage } from './view-platenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPlatenumberPageRoutingModule
  ],
  declarations: [ViewPlatenumberPage]
})
export class ViewPlatenumberPageModule {}
