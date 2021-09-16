export class Cuenta {
  banco = 'Banco Testing';
  titular: string;
  saldo: number;
  servicios = ['hipoteca', 'tarjeta', 'seguro', 'bizum'];

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  nombre() {
    return `Cuenta de ${this.titular}`;
  }

  ingresar(importe: number) {
    this.saldo += importe;

    return this.saldo;
  }

  retirar(importe: number) {
    if (this.saldo >= importe) {
      this.saldo -= importe;
    }

    return this.saldo;
  }

  haySaldo() {
    return this.saldo > 0;
  }
}
