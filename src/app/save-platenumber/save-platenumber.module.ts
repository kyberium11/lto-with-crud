import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavePlatenumberPageRoutingModule } from './save-platenumber-routing.module';

import { SavePlatenumberPage } from './save-platenumber.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavePlatenumberPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SavePlatenumberPage]
})
export class SavePlatenumberPageModule {}
