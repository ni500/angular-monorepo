import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Talk } from '@monorepo/talks';

@Component({
  selector: 'app-view-talks',
  templateUrl: './view-talks.component.html',
  styleUrls: ['./view-talks.component.scss'],
})
export class ViewTalksComponent implements OnInit {
  talks$: Observable<Talk[]>;
  window = window;
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.talks$ = this.afs
      .collection<Talk>('talks', (ref) => ref.orderBy('id', 'asc'))
      .valueChanges();
  }
}
