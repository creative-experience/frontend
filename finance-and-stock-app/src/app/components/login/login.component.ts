import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

import { User } from './../../model/user.model';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../styles.css']
})
export class LoginComponent implements OnInit {

  authStatus: string = "";
  model = new User();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  validateUser(loginForm: NgForm) {

    this.loginService.validateLoginDetails(this.model).subscribe(

      responseData => {

        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        this.router.navigate(['dashboard']);

      });

  }

}
