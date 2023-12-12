import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'monolith-angular-analog-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent {

  @ViewChild('hours') hours: any;
  @ViewChild('minutes') minutes: any;
  @ViewChild('seconds') seconds: any;

  today!: Date;
  h!: number;
  m!: number;
  s!: number;

  constructor() {
    setInterval(() => {
      this.clock();
    }, 1000);
  }

  clock() {
    console.log("clock")
    this.today = new Date();
    this.h = (this.today.getHours() % 12) + this.today.getMinutes() / 59; // 22 % 12 = 10pm
    this.m = this.today.getMinutes(); // 0 - 59
    this.s = this.today.getSeconds(); // 0 - 59

    this.h *= 30; // 12 * 30 = 360deg
    this.m *= 6;
    this.s *= 6; // 60 * 6 = 360deg

    this.rotation(this.hours, this.h);
    this.rotation(this.minutes, this.m);
    this.rotation(this.seconds, this.s);
  }

  rotation(target: any, val: any) {
    target.nativeElement.style.transform = `rotate(${val}deg)`;
  }
}
