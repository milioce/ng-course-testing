import { EventEmitter } from "@angular/core";

export class Cuenta {
  banco = 'Banco Testing';
  titular: string;
  saldo: number;
  servicios = ['hipoteca', 'tarjeta', 'seguro', 'bizum'];
  cambia = new EventEmitter<number>();

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  nombre() {
    return `Cuenta de ${this.titular}`;
  }

  ingresar(importe: number) {
    this.saldo += importe;
    this.cambia.emit(this.saldo);

    return this.saldo;
  }

  retirar(importe: number) {
    if (this.saldo >= importe) {
      this.saldo -= importe;
    }
    this.cambia.emit(this.saldo);

    return this.saldo;
  }

  haySaldo() {
    return this.saldo > 0;
  }
}
