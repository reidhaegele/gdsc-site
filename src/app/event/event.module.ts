import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatDialogModule } from '@angular/material/dialog';
import { EventComponent } from './event/event.component'


@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
  ]
})
export class EventModule { }
