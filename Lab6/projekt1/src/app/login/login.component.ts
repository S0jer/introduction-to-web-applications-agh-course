import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login=''
  password=''
  str=''

  constructor(private authService: AuthService) { }
  ngOnInit(): void {}

  senditem() {
    this.authService.SignIn(this.login,this.password);
  }

  newHero() {
    this.login='';
    this.password='';
  }
}
