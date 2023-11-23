import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SectionOneService {
    apiBaseUrl = "http://localhost:8080";
    public stepNavigate$ = new Subject<number>();
    constructor(private http: HttpClient) { }
    getQuestions() {
        return this.http.get(this.apiBaseUrl + '/getQuestions');
    }
}