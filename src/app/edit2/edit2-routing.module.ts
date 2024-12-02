import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Edit2Page } from './edit2.page';

const routes: Routes = [
  {
    path: '',
    component: Edit2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Edit2PageRoutingModule {}
