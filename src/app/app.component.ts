import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        width: '10px',
        opacity: 0,
        height: '10px'
      })),
      state('final', style({
        marginTop: '-10px',
        width: '248px',
        height: '200px',
        opacity: 1
      })),
      transition('initial=>final', animate('800ms ease-out')),
      transition('final=>initial', animate('300ms ease-in'))
    ]),
  ]
})
export class AppComponent {
  currentState = 'initial';
  isDatePicker = false;
  public onSelectDate;
  constructor(
    private datePipe: DatePipe
  ) { }

  public onNumberGenerated(onSelectDate) {
    this.changeState();
    this.onSelectDate = this.datePipe.transform(onSelectDate.mDate, 'dd/MM/yyyy');
  }
  changeState() {
    this.isDatePicker = !this.isDatePicker;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
