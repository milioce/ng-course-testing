import { FormBuilder } from "@angular/forms";
import { LoginForm } from "./formulario";

describe('Prueba de Formulario', () => {

  let loginForm: LoginForm;

  beforeEach(() => loginForm = new LoginForm(new FormBuilder()));

  it('Se debe crear un formulario con dos campos', () => {
    expect(loginForm.form.contains('email')).toBe(true);
    expect(loginForm.form.contains('password')).toBe(true);
  });

  it('El email es obligatorio', () => {
    const control = loginForm.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalse();
    expect(control.hasError('required')).toBeTrue();
  });

  it('El email es válido', () => {
    const control = loginForm.form.get('email');

    control.setValue('Emilio');
    expect(control.valid).toBe(false);
    expect(control.hasError('required')).toBe(false);
    expect(control.hasError('email')).toBe(true);

    control.setValue('emilio@gmail.com');
    expect(control.valid).toBe(true);

  });

});
