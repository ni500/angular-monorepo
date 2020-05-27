import { HomeComponent } from './home/home.component';
import { CreateTalkComponent } from './create-talk/create-talk.component';
import { ViewTalksComponent } from './view-talks/view-talks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ver', component: ViewTalksComponent },
  { path: 'crear', component: CreateTalkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
