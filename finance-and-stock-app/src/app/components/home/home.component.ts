import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../styles.css']
})
export class HomeComponent implements OnInit {

  user = new User();

  constructor() {

  }

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
  }

}
