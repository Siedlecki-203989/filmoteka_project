import { Component, OnInit } from '@angular/core';
import { Actor } from "../actor";
import { ActorService } from "../actor.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
  providers: [ActorService]
})
export class ActorListComponent implements OnInit {

  private actors: Actor[];

  constructor(private router: Router,private actorService: ActorService) { }

  ngOnInit() { //when component loading get all users and set the users[]
    this.getAllActors();
  }

  getAllActors() {
    this.actorService.findAll().subscribe(
      actors => {
        this.actors = actors;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNewActorPage() {
    this.router.navigate(['/actor/create']);
  }

  editActorPage(actor: Actor) {
    if (actor) {
      this.router.navigate(['/actor/edit', actor.id]);
    }
  }

  deleteActor(actor: Actor) {
    if (actor) {
      this.actorService.deleteActorById(actor.id).subscribe(
        res => {
          this.getAllActors();
          this.router.navigate(['/user']);
          console.log('done');
        }
      );
    }
  }

}
