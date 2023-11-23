import { PipeTransform, Pipe, Injectable, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Injectable()
@Pipe({ name: 'translateText', pure: false })
export class TranslateTextPipe extends TranslatePipe implements PipeTransform {
    constructor(private el: ElementRef, translate: TranslateService, _ref: ChangeDetectorRef) {
        super(translate, _ref);
    }
    override transform(query: string, ...args: any[]): any {
        const result = super.transform(query, args);
        if(result) {
          const match = /\r|\n/.exec(super.transform(query));
          const className = this.el.nativeElement.parentElement?.className;
          if (!className) {
            return result;
          }
          if (!match) {
            className.includes('text-preline') && (this.el.nativeElement.parentElement.className.replace("text-preline", ""));
            return result;
          }
          if (match) {
            if(typeof className !== 'undefined' && !className.includes('text-preline')) {
              this.el.nativeElement.parentElement.className = className + ' text-preline';
            }
            return result;
          }
        } else {
          return result;
        }
    }
}
