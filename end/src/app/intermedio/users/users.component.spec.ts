import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";
import { EMPTY, of, throwError } from 'rxjs';

describe('UsersComponent', () => {

  let component: UsersComponent;
  const service = new UsersService(null);

  beforeEach(() => {
    component = new UsersComponent(service);
  });

  it('Se deben cargar los usuarios', () => {

    const users = ['Emilio', 'Juan', 'Luis'];

    spyOn(service, 'getUsers').and.callFake(() => {
      return of(users);
    });

    component.ngOnInit();

    expect(component.users.length).toBeGreaterThan(0);
  });

  it('addUser invoca el metodo del API', () => {

    const spy = spyOn(service, 'addUser').and.callFake(() => {
      return EMPTY;
    });

    component.addUser();
    expect(spy).toHaveBeenCalled();

  });

  it('addUser añade un usuario al array', () => {

    const user = {id: 1, name: 'Emilio'};

    spyOn(service, 'addUser').and.callFake(() => {
      return of(user);
    });

    component.addUser();

    expect(component.users.indexOf(user)).toBeGreaterThanOrEqual(0);
  });

  it('si addUser falla tenemos el error devuelto por el servicio', () => {

    const error = 'No se puso añadir el usuario';
    spyOn(service, 'addUser').and.returnValue( throwError(error) );

    component.addUser();

    expect(component.errorMessage).toBe(error);
  });

  it('deleteUser debe invocar el delete del servicio', () => {

    spyOn(window, 'confirm').and.returnValue(true);

    const spy = spyOn(service, 'deleteUser').and.returnValue(EMPTY);

    component.deleteUser('1');

    expect(spy).toHaveBeenCalledWith('1');

  });

});
