import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue: number;

  constructor(private dataServices: DataServicesService) {
  }

  ngOnInit(): void {
    this.someValue = this.dataServices.getCurrentState();
  }
}
