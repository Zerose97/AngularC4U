import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateTextPipe } from './translate-text.pipe';

@NgModule({
  imports: [
    TranslateModule
  ],
  declarations: [ 
    TranslateTextPipe
  ],
  exports: [
    TranslateTextPipe,
    TranslateModule
  ]
})
export class TranslateTextPipeModule {}