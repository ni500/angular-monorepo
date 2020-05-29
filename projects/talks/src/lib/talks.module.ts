import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { NgMaterialModule } from 'projects/ui/src/lib/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [TalksComponent, CreateComponent, ViewComponent],
  imports: [
    NgMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [TalksComponent, CreateComponent],
})
export class TalksModule {}
