import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempoScreenRoutingModule } from './tempo-screen-routing.module';
import { TempoScreenComponent } from './tempo-screen.component';


@NgModule({
  declarations: [
    TempoScreenComponent
  ],
  imports: [
    CommonModule,
    TempoScreenRoutingModule
  ]
})
export class TempoScreenModule { }
