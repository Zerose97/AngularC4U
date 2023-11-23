import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    LeftPanelComponent
  ]
})
export class LeftPanelModule { }
