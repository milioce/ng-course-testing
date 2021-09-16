import { Cuenta } from "./cuenta";

describe('Prueba de Cuenta', () => {

  // npm run test -- --code-coverage

  let cuenta: Cuenta;

  beforeAll(() => {
  });

  beforeEach(() => {
    cuenta = new Cuenta('Emilio', 100);
  });

  afterEach(() => {
  });

  afterAll(() => {
  });


  it('Debe devolver el nombre del titular', () => {
    expect(cuenta.nombre()).toBe('Cuenta de Emilio');
  });

  it('Debe contener el nombre del titular', () => {
    expect(cuenta.nombre()).toContain('Emilio');
  });

  it('El saldo debe ser 150 si ingresas 50 en un saldo de 100', () => {
    cuenta.ingresar(50);

    expect(cuenta.saldo).toBe(150);
  });

  it('El saldo debe ser 50 si retiras 50 en un saldo de 100', () => {
    cuenta.retirar(50);

    expect(cuenta.saldo).toBe(50);
  });

  it('Debe tener saldo', () => {
    expect(cuenta.haySaldo()).toBe(true);
    expect(cuenta.haySaldo()).toBeTrue();
  });

  it('Debe tener al menos tres servicios', () => {
    expect(cuenta.servicios.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe tener los servicios tarjeta y seguro', () => {

    expect(cuenta.servicios).toContain('tarjeta');
    expect(cuenta.servicios).toContain('seguro');
  });

  it('El saldo no debe cambiar si retiramos mas dinero del disponible', () => {
    cuenta.retirar(200);

    expect(cuenta.saldo).toBe(100);
  });

});
