import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [UiComponent, ToolbarComponent],
  imports: [NgMaterialModule, RouterModule],
  exports: [UiComponent, ToolbarComponent],
})
export class UiModule {}
