import { Injectable } from '@angular/core';
import { Actor } from "./actor";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ActorService {

  private apiUrl = 'http://localhost:8080/api/actors';

  constructor(private http: Http) {
  }

  findAll(): Observable<Actor[]>  {
  return this.http.get(this.apiUrl)
    .map((res:Response) => <Actor[]>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

  findById(id: number): Observable<Actor> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveActor(actor: Actor): Observable<Actor> {
    return this.http.post(this.apiUrl, actor)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteActorById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateActor(id: number, actor: Actor): Observable<Actor> {
    return this.http.put(this.apiUrl + '/' + id,actor)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
