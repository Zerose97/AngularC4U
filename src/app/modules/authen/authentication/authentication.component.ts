import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {
  @ViewChild('test') myDiv: ElementRef<HTMLElement>;
  user: SocialUser;
  loggedIn: boolean;
  hidePassword = false;
  loginForm: FormGroup;
  messageError = '';
  showError = false;

  public languages = [
    {
      title: 'EN',
      code: 'en-US'
    },
    {
      title: 'VI',
      code: 'vi-VI'
    }
  ];
  selectedLanguage: any;

  constructor(
    private socialAuthService: SocialAuthService,
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    const lang = localStorage.getItem('lang') || '';
    this.selectedLanguage = lang ? JSON.parse(lang) : this.languages[1];
    this.translateService.use(this.selectedLanguage.code);
    
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.buildForm();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      (this.myDiv.nativeElement.childNodes[0].childNodes[1] as any).className = 'login-iframe';
    }, 2000);
    
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rememberMe: new FormControl(false)
    });
  }

  
  public onSelectLanguage(lang: any) {
    console.log(lang);
    
    this.selectedLanguage = lang;
    this.translateService.use(lang.code);
    localStorage.setItem('lang', JSON.stringify(lang))
    location.reload();
  }
}
