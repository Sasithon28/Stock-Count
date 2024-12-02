import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Edit2PageRoutingModule } from './edit2-routing.module';

import { Edit2Page } from './edit2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Edit2PageRoutingModule
  ],
  declarations: [Edit2Page]
})
export class Edit2PageModule {}
