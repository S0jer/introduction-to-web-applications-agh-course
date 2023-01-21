import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login='';
  nick='';
  password='';
  str='';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {}

  senditem() {
    this.authService.SignUp(this.login,this.password,this.nick);
  }

  newUser() {
    this.nick='';
    this.login='';
    this.password='';
  }


}
