import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogClockComponent } from '../analog-clock.component';

@Component({
  selector: 'monolith-angular-portfolio-page',
  standalone: true,
  imports: [CommonModule, AnalogClockComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent { }
