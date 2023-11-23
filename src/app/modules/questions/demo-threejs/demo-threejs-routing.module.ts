import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoThreejsComponent } from './demo-threejs.component';

const routes: Routes = [
  {
    path: '',
    component: DemoThreejsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoThreejsRoutingModule { }
