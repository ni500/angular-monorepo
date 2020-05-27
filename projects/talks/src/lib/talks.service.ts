import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Talk } from './talks.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TalksService {
  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {}

  getTalks(): Observable<Talk[]> {
    return this.afs
      .collection<Talk>('talks', (ref) => ref.orderBy('id', 'asc'))
      .valueChanges();
  }

  createTalk(talk: Talk) {
    this.afs
      .collection('talks')
      .doc(talk.id)
      .set(talk)
      .then(() => {
        this.snackBar.open('Charla agregada', 'OK', {
          duration: 2000,
        });
      })
      .catch((error) => {
        this.snackBar.open(error, 'OK', {
          duration: 2000,
        });
      });
  }
}
