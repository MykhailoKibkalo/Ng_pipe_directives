import {AfterViewChecked, AfterViewInit, Component, Input, OnInit, Output} from '@angular/core';
import {Users} from '../../interface/users';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit, AfterViewInit {

  @Output() a: boolean;
  @Input() singleUser: Users;
  btnStatus: boolean;
  constructor(private userService: UserService ) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.userService.getCurrentBtn().subscribe(value => this.btnStatus = value);
    console.log(this.btnStatus);
  }
}
