import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeQuestion } from '../quetions.model';
import { section3Questions } from './dummy-data';
import UtilsTempoProgress from 'src/app/@core/util/tempo.action.util';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {
  goNextStep = false;
  goNextSection: boolean = false;
  listQuestions: any[] = [];
  TypeQuestion = TypeQuestion;
  currentStep = 1;
  pendingStep = 1;
  titleSection = {
    title: 'Section 3',
    image: "https://www.thebalancemoney.com/thmb/9v0G86gt1AndDEjE8_Dt1NR3T8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/file---illustration-1093457270-04c29b6d0a61449fb145c05deeb660c9.jpg"
  };
  isMultipleQuestion = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.getListQuestion();
  }

  getListQuestion() {
    const character = localStorage.getItem('char_code');
    if(!character) {
      this.router.navigate(['/section-one']);
      return;
    }
    this.listQuestions = section3Questions;
    this.listQuestions.map((res, index) => {
      res.selectedItem = [];
      res.selectedCode = [];
      if([TypeQuestion.Multiple, TypeQuestion.MultipleRandom].includes(res.type)) {
        if(![TypeQuestion.MultipleRandom].includes(res.type)) {
          res.multipleManage = { answersMultiple: res.answers };
        } else {
          this.filterAnswerForRandomQuestion(index, true);
        }
      }
    });
    this.pendingStep = 1;
    this.checkMultiple(this.currentStep-1);
  }

  onSelectAnswer(item: any, index: number) {
    const isMultiple = [TypeQuestion.Multiple, TypeQuestion.MultipleRandom].includes(this.listQuestions[index].type);
    if(isMultiple) {
      const questionitem = this.listQuestions[index];
      if(questionitem.selectedCode.includes(item.code)) {
        questionitem.selectedCode = questionitem.selectedCode.filter((i:any) => i != item.code);
        questionitem.selectedItem = questionitem.selectedItem.filter((i: any) => i.code != item.code);
      } else {
        questionitem.selectedItem.push(item);
        questionitem.selectedCode.push(item.code);
      }
      const isRandomTag = [TypeQuestion.MultipleRandom].includes(this.listQuestions[index].type);
      isRandomTag && this.filterAnswerForRandomQuestion(index);
      // this.goNextStep = true;
    } else {
      this.listQuestions[index].selectedItem = [];
      this.listQuestions[index].selectedCode = [];
      this.listQuestions[index].selectedItem.push(item);
      this.listQuestions[index].selectedCode.push(item.code);
    }
    this.currentStep = index + 1;
    this.currentStep === this.listQuestions.length ? this.goNextSection = true : this.goNextStep = true;
  }

  filterAnswerForRandomQuestion(index: number, isInit = false) {
    console.log('alo');
    
    const getTags = (answers: any) => {
      const arrayTags: any = [];
      answers.map((a: any) => {
        a.isPicked = false;
        a.causeTag.map((t: any) => arrayTags.push(t));
      });
      // return arrayTags;
      return [...new Set(arrayTags.map((a: any) => a))]
    }
    const questionItem = this.listQuestions[index];
    if(isInit) {
      questionItem.multipleManage = {
        answersMultiple: [],
        answersTag: getTags(questionItem.answers),
      }
    }
    const multipleManage = questionItem.multipleManage;
    multipleManage.answersTag.map((t: any) => {
      const filterAnswer = questionItem.answers.filter((a: any) => a.causeTag.includes(t) && !a.isPicked );
      console.log(questionItem.answers);
      
      const pickedAnswer = filterAnswer[Math.floor(Math.random()*filterAnswer.length)];
      if(pickedAnswer) {
        pickedAnswer.isPicked = true;
        multipleManage.answersMultiple.push(pickedAnswer);
      }
    });
  }

  // calculateNextStep(nextStep: string) {
  //   if(this.currentStep === this.currentProgress) {
  //     this.goNextStep = true;
  //     this.targetNextStep = nextStep;
  //   }
  // }

  onSelectQuestion(question: number) {
    let el = document.getElementById(`section_${question + 1}`);
    el && el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.checkMultiple(question);
  }

  goToNextStep() {
    this.goNextStep = false;
    this.scrollToStep(this.currentStep+1);
  }

  scrollToStep(step: number) {
    this.pendingStep = step;
    let el = document.getElementById(`section_${step}`);
    el && el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.checkMultiple(step-1);
  }

  goToNextSection() {
    this.goNextSection = false;
    UtilsTempoProgress.setFinish(2);
    this.router.navigate(['questions/tempo-screen']);
  }

  checkMultiple(index: number) { // step start from 1 but index start from 0, sometime we must -1
    const itemQuestion = this.listQuestions[index];
    setTimeout(() => {
      this.isMultipleQuestion = [TypeQuestion.Multiple, TypeQuestion.MultipleRandom].includes(itemQuestion.type);
    }, 500);
  }
}
