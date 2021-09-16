import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() progress: number = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  changeValue( value: number ) {
    let newProgress = this.progress + value;

    if ( newProgress > 100 ) {
      newProgress = 100;
    } else if ( newProgress < 0 ) {
      newProgress = 0;
    }

    if (newProgress !== this.progress) {
      this.progress = newProgress;
      this.valueChanged.emit( this.progress );
      console.log('this.progress changes', this.progress);
    }
  }

}
