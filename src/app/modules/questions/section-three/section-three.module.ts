import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionThreeRoutingModule } from './section-three-routing.module';
import { SectionThreeComponent } from './section-three.component';
import { MatInputModule } from '@angular/material/input';
import { LeftPanelModule } from '../left-panel/left-panel.module';


@NgModule({
  declarations: [
    SectionThreeComponent
  ],
  imports: [
    CommonModule,
    SectionThreeRoutingModule,
    MatInputModule,
    LeftPanelModule
  ]
})
export class SectionThreeModule { }
