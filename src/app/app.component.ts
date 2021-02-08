import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Project is very good';
  asyncValue = new Promise(resolve => {
    setTimeout( () => {
      resolve ('It is example async pipe');
    }, 1000);
  });

  date = new Date();
  price = 100;
  e = 2.742462734682743987;
  user = {name: 'Ivan', age: 22, status: true};
}
