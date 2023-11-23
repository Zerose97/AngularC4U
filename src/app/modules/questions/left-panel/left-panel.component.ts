import { Component, Input, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { QuestionService } from '../quesions.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @HostBinding('style.width.px') width = 270;
  @Input() topImageUrl = '';
  @Input() contentList: any = [];
  @Input() selectedIndex = 0;
  @Input() topContent = {
    title: '',  
    image: ''
  }
  @Input() noContent = false;
  private _pendingStep: number;
  togglePanel = true;
    
  @Input() set pendingStep(value: number) {
    this._pendingStep = value;
    this.selectedIndex = value-1;
  }
  
  get pendingStep(): number {
    return this._pendingStep;
  }

  @Output() selectQuestion = new EventEmitter<number>();

  constructor(private questonService: QuestionService) {}

  ngOnInit(): void {
    this.topImageUrl = "https://www.thebalancemoney.com/thmb/9v0G86gt1AndDEjE8_Dt1NR3T8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/file---illustration-1093457270-04c29b6d0a61449fb145c05deeb660c9.jpg";
    this.checkToggle();
  }

  onSelectItem(index: number) {
    this.selectedIndex = index;
    this.selectQuestion.emit(index);
  }

  checkToggle() {
    this.questonService.togglePanel.subscribe({
      next: (res) => {
        this.togglePanel = res;
        this.width = this.togglePanel ? 270 : 40;
      }
    });
  }

  onTogglePanel() {
    this.questonService.setToggle(!this.togglePanel);
  }

}
