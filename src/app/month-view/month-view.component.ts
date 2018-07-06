import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwitchViewsService } from '../switch-views.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {

  constructor() { }

  @Input() monthToDisplay;
  @Output() viewChange:EventEmitter<any> = new EventEmitter();

  weeks = [1,2,3,4,5];
  days = [0,1,2,3,4,5,6];
  dayLabels = [];
  monthLabels = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  weekDayLabels = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  monthIndex = 0;
  year = 0;

  ngOnInit() {
    this.updateMonthView(this.monthToDisplay);
    this.monthToDisplay.setDate(1); //Set to the first of the month to allow for smooth back-and-forth of months
  }

  updateMonthView(month){
    this.dayLabels = [];
    this.monthIndex = month.getMonth();
    this.year = month.getFullYear();
    let lastDate = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    let lastDay = lastDate.getDate();
    let firstDate = new Date(month.getFullYear(), month.getMonth(), 1);
    let firstWeekDay = firstDate.getDay();
    //Calculate how many weeks need to be iterated (4,5 or 6)
    //February starting on monday and not leap-year: 4 weeks)
    if((month.getMonth() === 1) && (lastDay === 28) && (firstWeekDay === 0)){
      this.weeks = [1,2,3,4];
    }
    //31-day month starting on saturday or 30-day month starting on sunday: 6 weeks
    if(((lastDay === 30) && (firstWeekDay === 6)) || ((lastDay === 31) && (firstWeekDay > 4))){
      this.weeks = [1,2,3,4,5,6];
    }
    for(let idx = 0; idx < firstWeekDay; idx++){
      this.dayLabels.push("");
    }
    for (let idx = 1; idx <= lastDay; idx++){
      let strDate = ("0"+idx).substr(-2);
      this.dayLabels.push(strDate);
    }
    console.log("month:"+this.monthToDisplay);
  }

  increaseMonth(){
    this.monthToDisplay.setMonth(this.monthToDisplay.getMonth() + 1);
    this.updateMonthView(this.monthToDisplay);
  }
  decreaseMonth(){
    this.monthToDisplay.setMonth(this.monthToDisplay.getMonth() - 1);
    this.updateMonthView(this.monthToDisplay);
  }

  switchToDayView(dayClicked){
    let dayNr = Number(dayClicked);
    if(dayNr > 0){
      this.monthToDisplay.setDate(dayNr);
      this.viewChange.emit(this.monthToDisplay);
    }
  }
}
