import { Component } from '@angular/core';

import { environment } from './../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css']
})
export class AppComponent {

  constructor() {
    console.log(environment.production);
  }

  title = 'finance-and-stock-app';

}
