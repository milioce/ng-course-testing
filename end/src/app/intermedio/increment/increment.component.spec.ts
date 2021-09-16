import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementComponent } from './increment.component';

describe('Increment', () => {
  let component: IncrementComponent;
  let fixture: ComponentFixture<IncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe mostrar el titulo', () => {
    component.title = 'Testing title';

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

    expect(elem.innerHTML).toContain('Testing title');
  });

  it('Se debe mostrar en el input el valor del progreso', () => {
    component.changeValue(5);
    fixture.detectChanges();

    const input = fixture.debugElement.query( By.css('input') );
    const elem: HTMLInputElement = input.nativeElement;

    return fixture.whenStable().then(() => {
      expect(elem.value).toBe('55');
    });

  });

  it('Sedebe incrementar en 5 al hacer click en el botón', () => {
    const buttons = fixture.debugElement.queryAll( By.css('.btn') );

    buttons[0].triggerEventHandler('click', null);

    expect(component.progress).toBe(45);
  });

});
