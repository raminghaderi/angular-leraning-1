import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'ramin@yahoo.com' && this.password === '12345') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid username or password');
    }
  }

}
