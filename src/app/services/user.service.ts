import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Users} from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  private visibleBtn = new BehaviorSubject<boolean>(true);

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.url);
  }

  hideBtn(): void {
    this.visibleBtn.next(!this.visibleBtn);
  }

  showBtn(): void {
    this.visibleBtn.next(!this.visibleBtn);
  }

  getCurrentBtn(): BehaviorSubject<boolean> {
    return this.visibleBtn;
  }
}



