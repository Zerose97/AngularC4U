import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTwoRoutingModule } from './section-two-routing.module';
import { SectionTwoComponent } from './section-two.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LeftPanelModule } from '../left-panel/left-panel.module';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [
    SectionTwoComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    SectionTwoRoutingModule,
    LeftPanelModule
  ]
})
export class SectionTwoModule { }
