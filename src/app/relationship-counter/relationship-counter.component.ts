import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-relationship-counter',
  standalone: true,
  imports: [],
  templateUrl: './relationship-counter.component.html',
  styleUrl: './relationship-counter.component.scss'
})
export class RelationshipCounterComponent implements OnInit{
  startDate: Date = new Date('2022-03-05'); // Data de início do namoro
  elapsedTime: any = {};
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateElapsedTime();

      // Executa apenas no navegador
      this.intervalId = setInterval(() => {
        this.updateElapsedTime();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateElapsedTime(): void {
    const now = new Date();
    const diff = now.getTime() - this.startDate.getTime();

    this.elapsedTime = {
      years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
      months: Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
}
