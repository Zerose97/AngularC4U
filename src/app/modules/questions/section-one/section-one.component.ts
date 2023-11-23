import { Component, OnInit } from '@angular/core';
import { SectionOneService } from './section-one.service';
import { CardKnowledge } from './models/card.model';
import { Router } from '@angular/router';
import UtilsTempoProgress from 'src/app/@core/util/tempo.action.util';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {
  public selectedGender = '';
  public currentProgress = 1;
  public currentStep = 1;
  public selectedCard = 0;
  public goNextStep = false;
  public targetNextStep = '';
  public cardList: CardKnowledge[] = [
    {
      cardId: 1,
      title: 'Cat A',
      content: 'Content Cat A, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.',
      level: '1',
      color: 'cadetblue',
      image: 'https://w0.peakpx.com/wallpaper/344/943/HD-wallpaper-tom-cat-tom-cat-animation-art-cartoon.jpg',
      disabled: false
    },
    {
      cardId: 2,
      title: 'Cat B',
      content: 'Content Cat B, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.',
      level: '2',
      color: 'red',
      image: 'https://i.vgt.vn/2021/10/15/doraemon-va-nhung-su-that-thu-vi-fan-trung-thanh-cung-chua-chac-biet-a4b-6095906.jpg',
      disabled: false
    },
    {
      cardId: 3,
      title: 'Cat C',
      content: 'Content Cat C, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.',
      level: '3',
      color: 'green',
      image: 'https://speechhindi.com/wp-content/uploads/2022/07/Oggycockroaches-oggy.jpg',
      disabled: true
    },
    {
      cardId: 4,
      title: 'Cat D',
      content: 'Content Cat D, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.',
      level: '4',
      color: 'purple',
      image: 'https://paradepets.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg5MjIwODczODI2/simons-cat.jpg',
      disabled: true
    },
    {
      cardId: 5,
      title: 'Cat E',
      content: 'Content Cat E, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.',
      level: '5',
      color: 'yellow',
      image: 'https://fugitives.com/wp-content/uploads/2023/01/Puss-In-Boots-Ending-Explained-2011-Animated-Action-Film.jpg',
      disabled: true
    }
  ]
  goNextSection: boolean = false;
  pendingStep = 1;
  titleSection = {
    title: 'Section 1',
    image: "https://www.thebalancemoney.com/thmb/9v0G86gt1AndDEjE8_Dt1NR3T8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/file---illustration-1093457270-04c29b6d0a61449fb145c05deeb660c9.jpg"
  }

  constructor(
    private sectionOneService: SectionOneService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  selectGender(value: string) {
    this.selectedGender = value;
    this.calculateNextStep('section2');
  }

  onNameChange(value: any) {
    this.calculateNextStep('section3');
  }
  
  valueChanged(e: any) {
    this.calculateNextStep('section4');
  }

  onCityChange(value: any) {
    this.calculateNextStep('section5');
  }

  selectCard(value: number) {
    this.selectedCard = value;
    localStorage.setItem('char_code', value.toString());
    this.goNextSection = true;
  }


  calculateNextStep(nextStep: string) {
    if(this.currentStep === this.currentProgress) {
      this.goNextStep = true;
      this.targetNextStep = nextStep;
    }
  }

  goToNextStep() {
    this.goNextStep = false;
    this.scrollToStep(this.targetNextStep);
    this.nextStep();
  }

  scrollToStep(step: string) {
    console.log(step);
    
    let el = document.getElementById(step);
    console.log(el);
    
    el && el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  nextStep() {
    const step = this.targetNextStep.substr(this.targetNextStep.length - 1);
    this.currentStep++;
    this.sectionOneService.stepNavigate$.next(this.currentProgress++);
  }

  clickNavToStep(event: string) {
    this.currentStep = +event;
    this.scrollToStep(`section${event}`);
  }

  goToNextSection() {
    this.goNextSection = false;
    UtilsTempoProgress.setFinish(0);
    this.router.navigate(['questions/tempo-screen']);
  }

}
