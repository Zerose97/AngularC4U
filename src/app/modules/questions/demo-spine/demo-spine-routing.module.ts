import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSpineComponent } from './demo-spine.component';

const routes: Routes = [
  {
    path: '',
    component: DemoSpineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoSpineRoutingModule { }
