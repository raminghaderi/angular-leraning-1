import { USERS } from './mock-users';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mockUsers = USERS;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }

}
