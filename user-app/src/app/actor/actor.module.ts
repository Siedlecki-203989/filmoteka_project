import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorCreateComponent } from './actor-create/actor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ActorListComponent, ActorCreateComponent]
})
export class ActorModule { }
