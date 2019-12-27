import { AnimalPage } from './../animal/animal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallPageRoutingModule } from './detall-routing.module';

import { DetallPage } from './detall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallPageRoutingModule
  ],
  declarations: [DetallPage]
})
export class DetallPageModule {}
