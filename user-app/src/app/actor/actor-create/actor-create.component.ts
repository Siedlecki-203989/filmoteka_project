import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActorService} from "../actor.service";
import {Actor} from "../Actor";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css'],
  providers: [ActorService]
})
export class ActorCreateComponent implements OnInit, OnDestroy {

  id: number;
  actor: Actor;

  actorForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private actorService: ActorService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.actorForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.actorService.findById(this.id).subscribe(
        actor => {
          this.id = actor.id;
          this.actorForm.patchValue({
            firstName: actor.firstName,
            lastName: actor.lastName,
          });
        },error => {
          console.log(error);
        }
      );

    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.actorForm.valid) {
      if (this.id) {
        let actor: Actor = new Actor(this.id,
          this.actorForm.controls['firstName'].value,
          this.actorForm.controls['lastName'].value);
        this.actorService.updateActor(this.id,actor).subscribe();
      } else {
        let actor: Actor = new Actor(null,
          this.actorForm.controls['firstName'].value,
          this.actorForm.controls['lastName'].value);
        this.actorService.saveActor(actor).subscribe();

      }
      this.actorForm.reset();
      this.router.navigate(['/actor']);
    }
  }

    redirectActorPage() {
      this.router.navigate(['/actor']);

    }
}
