import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=''
  password=''
  str=''

  constructor(private authService: AuthService) { }
  ngOnInit(): void {}

  sendItem() {
    this.authService.SignIn(this.email,this.password);
  }

  newUser() {
    this.email='';
    this.password='';
  }
}
