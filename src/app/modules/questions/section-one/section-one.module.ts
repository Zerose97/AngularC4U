import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionOneRoutingModule } from './section-one-routing.module';
import { SectionOneComponent } from './section-one.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StepNavComponent } from './step-nav/step-nav.component';
import { SectionOneService } from './section-one.service';
import { LeftPanelModule } from '../left-panel/left-panel.module';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [
    SectionOneComponent,
    StepNavComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    SectionOneRoutingModule,
    LeftPanelModule
  ],
  providers: [
    SectionOneService
  ]
})
export class SectionOneModule { }
