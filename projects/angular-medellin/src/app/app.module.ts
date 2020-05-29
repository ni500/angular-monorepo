import { TalksModule } from './../../../talks/src/lib/talks.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from 'projects/ui/src/public-api';
import { HomeComponent } from './home/home.component';
import { ViewTalksComponent } from './view-talks/view-talks.component';
import { CreateTalkComponent } from './create-talk/create-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewTalksComponent,
    CreateTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    TalksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
