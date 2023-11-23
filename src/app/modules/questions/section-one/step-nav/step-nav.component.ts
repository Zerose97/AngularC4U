import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SectionOneService } from '../section-one.service';

@Component({
  selector: 'app-step-nav',
  templateUrl: './step-nav.component.html',
  styleUrls: ['./step-nav.component.scss']
})
export class StepNavComponent implements OnInit {
  public progress = document.getElementById("progress") || {style: {height: ''}};
  public prev = document.getElementById("prev");
  public next = document.getElementById("next");
  public cricles = document.querySelectorAll(".circle");
  public currentActive = 1;
  public disabledPrev = true;
  public disabledNext = false;
  @Output() onSelectStep = new EventEmitter<string>();

  constructor(private sectionOneService: SectionOneService) { }

  ngOnInit() {
    this.progress = document.getElementById("progress") || {style: {height: ''}};
    this.prev = document.getElementById("prev");
    this.next = document.getElementById("next");
    this.cricles = document.querySelectorAll(".circle");
    this.sectionOneService.stepNavigate$.subscribe({
      next: () => {
        this.onNext();
      }
    })
  }

  onClickIcon(e: any, id: number) {
    const parentEle = e['srcElement']['parentElement'];
    if(parentEle) {
      const classList = parentEle.classList.value;
      classList.includes('active') && this.onSelectStep.emit(id+'');
    }
  }

  public onNext() {
    console.log('onNext');
    
    if (this.currentActive < this.cricles.length) {
      this.currentActive++;
    }
    this.update();
  }

  public onPrev() {
    if (this.currentActive > 1) {
      this.currentActive--;
    }
    this.update();
  }

  private update() {
   this.cricles.forEach((circle, idx) => {
      if (idx < this.currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    this.progress.style.height =
      ((this.currentActive - 1) / (this.cricles.length - 1)) * 100 + "%";

    if (this.currentActive === 1) {
      this.disabledPrev = true;
    } else if (this.currentActive === this.cricles.length) {
      this.disabledNext = true;
    } else {
      this.disabledPrev = false;
      this.disabledNext = false;
    }
  }


}
