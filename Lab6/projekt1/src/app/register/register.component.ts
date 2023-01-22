import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nick='';
  email='';
  password='';
  str='';

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {}

  sendItem() {
    this.authService.SignUp(this.email,this.password,this.nick);
  }

  newUser() {
    this.email='';
    this.nick='';
    this.password='';
  }
}
