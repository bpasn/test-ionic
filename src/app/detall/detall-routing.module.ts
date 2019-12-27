import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallPage } from './detall.page';

const routes: Routes = [
  {
    path: '',
    component: DetallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallPageRoutingModule {}
