import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UtilsTempoProgress from 'src/app/@core/util/tempo.action.util';

@Component({
  selector: 'app-tempo-screen',
  templateUrl: './tempo-screen.component.html',
  styleUrls: ['./tempo-screen.component.scss']
})
export class TempoScreenComponent implements OnInit {
  selectedTempo = 0;
  tempoList = [
    {
      id: 0,
      name: 'Tempo A',
      image: 'https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_925,h_529,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png',
      finished: false,
      unlocked: false
    },
    {
      id: 1,
      name: 'Tempo B',
      image: 'https://static.wixstatic.com/media/bb1bd6_aece458af3504a6ab4f036e7fc673e00~mv2.png',
      finished: false,
      unlocked: false
    },
    {
      id: 2,
      name: 'Tempo C',
      image: 'https://static.wixstatic.com/media/4a5235_fb0c6c836a6643c484251a417d3e191b~mv2.png/v1/fill/w_924,h_622,al_c,q_90,enc_auto/4a5235_fb0c6c836a6643c484251a417d3e191b~mv2.png',
      finished: false,
      unlocked: false
    },
    {
      id: 3,
      name: 'Tempo D',
      image: 'https://static.wixstatic.com/media/bb1bd6_de0f3f39bfbb4bc5954bdc829e09c20d~mv2.png/v1/fill/w_924,h_618,al_c,q_90,enc_auto/bb1bd6_de0f3f39bfbb4bc5954bdc829e09c20d~mv2.png',
      finished: false,
      unlocked: false
    },
  ]
  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit() {
    const tempoProgress:any = UtilsTempoProgress.getList();
    setTimeout(() => {
      tempoProgress.map((t: any) => {
        if(t.finished) {
          const item = this.tempoList.find(((ti:any) => ti.id === t.id));
          if(item) {
            const indexOf = this.tempoList.indexOf(item);
            item.finished = true;
            item.unlocked = !item.finished;
            this.tempoList[indexOf+1].unlocked = true;

          }
        }
      })
    }, 2000);
  }

  selectTempo(item: any) {
    if(this.selectedTempo === item.id && item.unlocked) {
      switch (item.id) {
        case 0:
          this.router.navigate(['questions/section-one']);
          break;
        case 1:
          this.router.navigate(['questions/section-two']);
          break;
        case 2:
          this.router.navigate(['questions/section-three']);
          break;
        default:
          break;
      }
    }
    this.selectedTempo = item.id;
  }
}
