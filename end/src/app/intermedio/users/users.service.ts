import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor( public http: HttpClient ) { }

  getUsers() {
    return this.http.get<any[]>('...');
  }

  addUser( user: any ) {
    return this.http.post('...', user );
  }

  deleteUser( id: string ) {
    return this.http.delete('...' );
  }

}
