import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoSpineRoutingModule } from './demo-spine-routing.module';
import { DemoSpineComponent } from './demo-spine.component';


@NgModule({
  declarations: [
    DemoSpineComponent
  ],
  imports: [
    CommonModule,
    DemoSpineRoutingModule
  ]
})
export class DemoSpineModule { }
