import {Component} from '@angular/core';
import {DataServicesService} from './services/data-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Project is very good';

  constructor(private dataService: DataServicesService) {
  }

  increment(): void {
    this.dataService.incCurrentValue();
  }

  decrement(): void {
    this.dataService.decCurrentState();
  }
}
