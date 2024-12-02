import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalmoneyPageRoutingModule } from './calmoney-routing.module';

import { CalmoneyPage } from './calmoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalmoneyPageRoutingModule
  ],
  declarations: [CalmoneyPage]
})
export class CalmoneyPageModule {}
