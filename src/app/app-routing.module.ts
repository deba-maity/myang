import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DjmComponent } from './djm/djm.component';

const routes: Routes = [
  { path: 'app-djm',      component: DjmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DjmComponent]
