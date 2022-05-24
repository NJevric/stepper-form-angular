import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisableBtnService {

  public disableBtn: BehaviorSubject<boolean>;
  constructor() {
    this.disableBtn = new BehaviorSubject<boolean>(true);
  }

  getDisableBtn(): Observable<boolean> {
    return this.disableBtn.asObservable();
  }
  setDisableBtn(val: boolean) {
    return this.disableBtn.next(val);
  }
}
