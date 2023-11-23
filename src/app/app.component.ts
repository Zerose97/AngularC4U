import { Component } from '@angular/core';
import UtilsTempoProgress from './@core/util/tempo.action.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-SkinCare';
  

  constructor() {
    UtilsTempoProgress.setUp();
  }

}
