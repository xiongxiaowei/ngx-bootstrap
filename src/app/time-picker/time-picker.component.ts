import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   public mytime: Date = new Date();
 
  public update(): void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }
 
  public changed(): void {
    console.log('Time changed to: ' + this.mytime);
  }
 
  public clear(): void {
    this.mytime = void 0;
  }
}
