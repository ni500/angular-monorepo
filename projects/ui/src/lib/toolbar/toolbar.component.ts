import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() color = 'primary';
  @Input() logo = 'https://pappcornbackapp.com/logos/logo_angular_bogota.png';
  @Input() title = 'App principal';
  constructor() { }

  ngOnInit(): void {
  }

}
