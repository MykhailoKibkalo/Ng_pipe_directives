import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private data = new BehaviorSubject<number>(0);

  constructor() {
  }

  getCurrentState(): BehaviorSubject<number>{
    return this.data;
  }

  incCurrentValue(): void {
     this.data.next(this.data.getValue() + 1);
  }

  decCurrentState(): void {
    this.data.next(this.data.getValue() - 1);
  }
}
