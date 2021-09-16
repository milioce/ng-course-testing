import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  template: `
    <p>user works!</p>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private _service: UsersService) { }

  ngOnInit(): void {
  }

  getUser() {
    this._service.getUsers().subscribe(users => this.users = users);
  }

}
