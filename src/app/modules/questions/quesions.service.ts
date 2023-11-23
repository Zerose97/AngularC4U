import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class QuestionService {
    togglePanel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    apiBaseUrl = "http://localhost:8080";
    constructor(private http: HttpClient) { }
    getQuestions() {
        return this.http.get(this.apiBaseUrl + '/getQuestions');
    }

    setToggle(value: boolean) {
        this.togglePanel.next(value);
    }


}