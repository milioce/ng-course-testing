import { Cuenta } from "./cuenta";

describe('Prueba de Cuenta intermedia', () => {

  let cuenta: Cuenta;

  beforeEach(() => cuenta = new Cuenta('Emilio', 100));

  it('Se emite el saldo al retirar dinero', (done) => {
    let saldo = 100;

    cuenta.cambia.subscribe( data => {
      saldo = data
      expect(saldo).toBe(50);
      done();
    });

    cuenta.retirar(50);
  });

});
