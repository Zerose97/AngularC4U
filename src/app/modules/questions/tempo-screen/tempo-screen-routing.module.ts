import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempoScreenComponent } from './tempo-screen.component';

const routes: Routes = [
  {
    path: '',
    component: TempoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempoScreenRoutingModule { }
