import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title = 'Angular Monorepo';
  @Input() color = 'primary';
  @Input() logo = 'https://pappcornbackapp.com/logos/logo_angular_bogota.png';
}
