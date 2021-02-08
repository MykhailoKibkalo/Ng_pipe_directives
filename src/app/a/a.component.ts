import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  someValue: number;

  constructor(private dataServices: DataServicesService) {
  }

  ngOnInit(): void {
    this.someValue = this.dataServices.getCurrentState();
  }

}
