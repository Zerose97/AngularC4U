import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoThreejsRoutingModule } from './demo-threejs-routing.module';
import { DemoThreejsComponent } from './demo-threejs.component';


@NgModule({
  declarations: [
    DemoThreejsComponent
  ],
  imports: [
    CommonModule,
    DemoThreejsRoutingModule
  ]
})
export class DemoThreejsModule { }
