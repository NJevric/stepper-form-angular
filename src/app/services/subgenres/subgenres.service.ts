import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubgenre } from 'src/app/interfaces/i-subgenre';

@Injectable({
  providedIn: 'root'
})
export class SubgenresService {

  public subgenres: BehaviorSubject<Array<ISubgenre>>;

  constructor() {
    this.subgenres = new BehaviorSubject<Array<ISubgenre>>(
      [
        {
          id: 1,
          name: "Subgenre 1",
          isDescriptionRequired: true
        },
        {
          id: 2,
          name: "Subgenre 2",
          isDescriptionRequired: false
        },
        {
          id: 3,
          name: "Subgenre 3",
          isDescriptionRequired: true
        },
        {
          id: 4,
          name: "Subgenre 4",
          isDescriptionRequired: true
        },
        {
          id: 5,
          name: "Subgenre 5",
          isDescriptionRequired: false
        },
        {
          id: 6,
          name: "Subgenre 6",
          isDescriptionRequired: false
        },
        {
          id: 7,
          name: "Subgenre 7",
          isDescriptionRequired: true
        }
      ]
    )
  }

  public setSubgenres(val: Array<ISubgenre>) {
      return this.subgenres.next(val);
  }
  public getSubgenres(): Observable<Array<ISubgenre>> {
    return this.subgenres.asObservable();
  }
}
