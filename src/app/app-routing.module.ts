import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InterviewComponent } from './interview/interview.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'interview',component:InterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
