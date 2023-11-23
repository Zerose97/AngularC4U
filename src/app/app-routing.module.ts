import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authen/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./modules/questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'demo-threejs',
    loadChildren: () => import('./modules/questions/demo-threejs/demo-threejs.module').then(m => m.DemoThreejsModule)
  },
  {
    path: 'demo-spine',
    loadChildren: () => import('./modules/questions/demo-spine/demo-spine.module').then(m => m.DemoSpineModule)
  }
];

@NgModule({
  declarations: [
      AppComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
