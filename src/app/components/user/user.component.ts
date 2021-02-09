import {Component, Input, OnInit, Output, EventEmitter, AfterViewChecked} from '@angular/core';
import {Users} from '../../interface/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @Output() chosenUser = new EventEmitter<Users>();
  @Input() user: Users;

  constructor() {
  }

  ngOnInit(): void {
  }


  idUp(user: Users): void {
    this.chosenUser.emit(user);
  }
}
