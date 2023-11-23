import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionService } from './quesions.service';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    QuestionsRoutingModule
  ],
  providers: [
    QuestionService
  ]
})
export class QuestionsModule { }
