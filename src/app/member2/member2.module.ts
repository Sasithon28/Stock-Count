import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Member2PageRoutingModule } from './member2-routing.module';

import { Member2Page } from './member2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Member2PageRoutingModule
  ],
  declarations: [Member2Page]
})
export class Member2PageModule {}
