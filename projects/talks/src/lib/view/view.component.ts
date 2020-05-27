import { TalksService } from './../talks.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Talk } from '../talks.model';

@Component({
  selector: 'lib-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  talks$: Observable<Talk[]>;
  constructor(private talksService: TalksService) {}

  ngOnInit(): void {
    this.talks$ = this.talksService.getTalks();
  }
}
