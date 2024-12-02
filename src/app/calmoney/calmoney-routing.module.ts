import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalmoneyPage } from './calmoney.page';

const routes: Routes = [
  {
    path: '',
    component: CalmoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalmoneyPageRoutingModule {}
