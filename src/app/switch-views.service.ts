import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchViewsService {

  constructor() { }

  viewChange:EventEmitter<string> = new EventEmitter();

}
