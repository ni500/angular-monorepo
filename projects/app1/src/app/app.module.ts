import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTalksComponent } from './view-talks/view-talks.component';
import { CreateTalksComponent } from './create-talks/create-talks.component';
import { TalksModule } from '@monorepo/talks';
import { HomeComponent } from './home/home.component';
import { UiModule, NgMaterialModule } from '@monorepo/ui';

@NgModule({
  declarations: [
    AppComponent,
    ViewTalksComponent,
    CreateTalksComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TalksModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
