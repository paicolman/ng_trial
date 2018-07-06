import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { SwitchViewsService } from './switch-views.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeDate = new Date();
  displayMode = 'MONTH';

  switchView(date, mode){
    this.activeDate = date;
    this.displayMode = mode;
  }
  switchToMonthView(date){
    this.activeDate = date;
    this.displayMode = 'MONTH';
  }
}
