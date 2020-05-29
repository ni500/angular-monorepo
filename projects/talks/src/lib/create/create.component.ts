import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Talk } from '../talk.model';

@Component({
  selector: 'lib-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() origin = 'angular-bogota';
  talk: Talk = this.newTalk();

  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    this.talk = {
      ...this.talk,
      origin: this.origin,
    };
    this.afs
      .collection('talks')
      .doc(this.talk.id)
      .set(this.talk)
      .then(() => {
        this.snackBar.open('Charla agregada', 'OK', {
          duration: 2000,
        });
        this.talk = this.newTalk();
      })
      .catch((error) => {
        this.snackBar.open(error, 'OK', {
          duration: 2000,
        });
      });
  }

  newTalk(): Talk {
    return {
      title: '',
      description: '',
      speaker: '',
      id: (+new Date()).toString(),
      url: '',
      origin: this.origin,
    };
  }
}
