import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Users} from '../../interface/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  singleUser: Users;
  users: Users[];
  btnStatus: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);

  }


  chosenUser(user: Users): void {
    this.singleUser = user;
  }
}
