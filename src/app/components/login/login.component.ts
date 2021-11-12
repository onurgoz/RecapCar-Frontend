import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login[]=[];
  dataLoaded = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {this.Login();
  console.log('çalış1');}

  Login(){
    this.loginService.Login().subscribe(response => {this.login=response.data})
    console.log(this.login[0].token);
    console.log("çalış0");
  }
}
