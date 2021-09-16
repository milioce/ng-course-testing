import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  template: `
    <p>
      Users works!
    </p>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  public users: any[] = [];
  public errorMessage: string;

  constructor( public _usersService: UsersService ) { }

  ngOnInit() {
    this._usersService.getUsers()
          .subscribe( users => this.users = users );
  }

  addUser() {
    const user = { nombre: 'Emilio' };

    this._usersService.addUser(user)
          .subscribe(
            newUser => this.users.push(newUser),
            err => this.errorMessage = err
          );
  }

  deleteUser(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este usuario');

    if ( confirmar ) {
      this._usersService.deleteUser( id );
    }

  }

}
