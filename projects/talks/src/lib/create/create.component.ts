import { TalksService } from './../talks.service';
import { Component, OnInit } from '@angular/core';
import { Talk } from '../talks.model';

@Component({
  selector: 'lib-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  talk: Talk = this.newTalk();
  constructor(private talksService: TalksService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.talksService.createTalk(this.talk);
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
