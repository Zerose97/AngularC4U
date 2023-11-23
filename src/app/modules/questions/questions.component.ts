import { Component, OnInit } from '@angular/core';
import { QuestionService } from './quesions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionList: any = [];
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getQuestions().pipe().subscribe({
      next: (res) => {
        console.log(res);
        this.questionList = res;
      }
    });
    
  }

}
