import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'section-one',
    pathMatch: 'full',
  },
  {
    path: 'section-one',
    loadChildren: () => import('./section-one/section-one.module').then(m => m.SectionOneModule)
  },
  {
    path: 'section-two',
    loadChildren: () => import('./section-two/section-two.module').then(m => m.SectionTwoModule)
  },
  {
    path: 'section-three',
    loadChildren: () => import('./section-three/section-three.module').then(m => m.SectionThreeModule)
  },
  {
    path: 'tempo-screen',
    loadChildren: () => import('./tempo-screen/tempo-screen.module').then(m => m.TempoScreenModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
