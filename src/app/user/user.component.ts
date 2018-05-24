import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers()
    .subscribe(users => this.users = users);
  }

}
