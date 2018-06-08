import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorCreateComponent } from './actor-create/actor-create.component';

const routes: Routes = [
  {path: 'actor', component: ActorListComponent},
  {path: 'actor/create', component: ActorCreateComponent},
  {path: 'actor/edit/:id', component: ActorCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
