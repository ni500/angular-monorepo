import { Talk } from './../models/talk.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-talk',
  templateUrl: './create-talk.component.html',
  styleUrls: ['./create-talk.component.scss'],
})
export class CreateTalkComponent implements OnInit {
  talk: Talk = this.newTalk();

  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
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
    };
  }
}
