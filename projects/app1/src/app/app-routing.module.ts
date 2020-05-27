import { CreateTalksComponent } from './create-talks/create-talks.component';
import { ViewTalksComponent } from './view-talks/view-talks.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ver', component: ViewTalksComponent },
  { path: 'crear', component: CreateTalksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
