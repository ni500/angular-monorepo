import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTalksComponent } from './view-talks/view-talks.component';
import { CreateTalkComponent } from './create-talk/create-talk.component';
import { HomeComponent } from './home/home.component';
import { TalksModule } from '@monorepo/talks';
import { UiModule } from '@monorepo/ui';

@NgModule({
  declarations: [
    AppComponent,
    ViewTalksComponent,
    CreateTalkComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TalksModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
