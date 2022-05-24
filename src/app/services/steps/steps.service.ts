import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private step: BehaviorSubject<number>;
  private stepHasBeenThree: BehaviorSubject<boolean>;
  constructor() {
    this.step = new BehaviorSubject<number>(1);
    this.stepHasBeenThree = new BehaviorSubject<boolean>(false);
  }

  setStep(val: number) {
    return this.step.next(val);
  }

  getStep(): Observable<number> {
    return this.step.asObservable();
  }

  setStepHasBeenThree(val: boolean) {
    return this.stepHasBeenThree.next(val);
  }

  getStepHasBeenThree(): Observable<boolean> {
    return this.stepHasBeenThree.asObservable();
  }
}
