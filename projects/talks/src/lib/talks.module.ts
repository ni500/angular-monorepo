import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgMaterialModule } from '@monorepo/ui';

@NgModule({
  declarations: [TalksComponent, ViewComponent, CreateComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [TalksComponent, ViewComponent, CreateComponent],
})
export class TalksModule {}
