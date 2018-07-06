import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SwitchViewsService } from '../switch-views.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  constructor() { }

  @Input() dayToDisplay;
  @Output() viewChange:EventEmitter<any> = new EventEmitter();

  dayLabel:string;
  monthLabels = [" January "," February "," March "," April "," May "," June "," July "," August "," September "," October "," November "," December "];
  weekDayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  weekdayLabel:string;
  dayLabel:string;

  ngOnInit() {
    this.updateDayView();
  }

  updateDayView(){
    let year = this.dayToDisplay.getFullYear();
    let month = this.monthLabels[this.dayToDisplay.getMonth()];
    this.weekdayLabel = this.weekDayLabels[this.dayToDisplay.getDay()];
    this.dayLabel = this.dayToDisplay.getDate() + month + year.toString();
  }

  increaseDay(){
    this.dayToDisplay.setDate(this.dayToDisplay.getDate() + 1);
    this.updateDayView();
  }
  decreaseDay(){
    this.dayToDisplay.setDate(this.dayToDisplay.getDate() - 1);
    this.updateDayView();
  }

  switchToMonthView(){
    this.viewChange.emit(this.dayToDisplay);
  }

}
