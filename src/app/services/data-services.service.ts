import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private data = new BehaviorSubject<number>(0);

  constructor() {
  }

  getCurrentState(): number {
    return this.data.getValue();
  }

  incCurrentValue(): void {
     this.data.next(this.getCurrentState() + 1);
  }

  decCurrentState(): void {
    this.data.next(this.getCurrentState() - 1);
  }
}
